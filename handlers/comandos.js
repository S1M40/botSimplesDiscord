const { Perms } = require("../validation/Permissions");
const { client } = require("discord.js");
const { promisify } = require("util");
const {glob} = require("glob");
const PG = promisify(glob);
var AsciiTable = require("ascii-table");

/**
 * @param {client} client
 */
module.exports = async (client) =>{
    var table = new AsciiTable("Comandos Carregados");



    CommandsArray = [];

    (await PG(`${process.cwd()}/comandos/*/*.js`)).map(async (file) => {
        const command = require(file);

        if(!command.name)
        return table.addRow(file.split("/")[7], "❌ Erro", "Falta um nome")

        if(!command.description)
        return table.addRow(command.name, "❌ Erro", "Falta uma descrição")

        if(!command.permission){
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else
            return table.addRow(command.name, "❌ Erro", "A permissão é Invalida")
        }


        client.commands.set(command.name, command);
        CommandsArray.push(command);

        await table.addRow(command.name, "✅ Carregado com Sucesso")


    });

    console.log(table.toString());


    // Verificação Das Permissões//


    client.on("ready" , async () => {
        const MainGuild = await client.guilds.cache.get("ID do Servidor do Discord");

        MainGuild.commands.set(CommandsArray).then(async (command) =>{
            const Roles = (commandName) => {
                const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;
                if(!cmdPerms) return null;


                return MainGuild.roles.cache.filter((r) => r.permissions.has(cmdPerms));

            }

            const fullPermissions = command.reduce((accumulator, r) => {
                const roles = Roles(r.name);
                if(!roles) return accumulator;

                const permissions = roles.reduce((a, r) => {
                    return [...a, {id: r.id, type: "ROLE", permission: true}]
                }, []);


                return [...accumulator, {id: r.id, permissions}]
            }, []);

            await MainGuild.commands.permissions.set({ fullPermissions });
        });
    });


}