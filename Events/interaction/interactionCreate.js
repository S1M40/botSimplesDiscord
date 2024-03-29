const { client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name:"interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {client} client 
     */

    //Cria a interação com o utilizador, responde se houver um erro.
    
    async execute(interaction, client) {
        if(interaction.isCommand()){
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("❌ Ocorreu um erro ao executar este comando!")
            ]}) && client.commands.delete(interaction.commandName);


            command.execute(interaction, client);
        }
    }
}