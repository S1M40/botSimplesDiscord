const { Events } = require("../validation/EventNames");
const { promisify } = require("util");
const { glob } = require("glob");
var AsciiTable = require("ascii-table");
const PG = promisify(glob);

module.exports = async (client) => {
    var table = new AsciiTable('Eventos Carregados');


    (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
        const event = require(file);

        if (!Events.includes(event.name)  || !event.name ){
            const L = file.split('/');
            await table.addRow(`${event.name || "Missing"}`, `❌ Evento é invalido ou está em falta: ${L[6] + `/` + L[7]}`);
            return;
        }

        if (event.once) {
            client.once(event.name, (...args) => event.execute (...args, client))
        }else{

            client.on(event.name, (...args) => event.execute (...args, client))
        };

        await table.addRow(event.name, "✅ Carregado com sucesso")
    });

    console.log(table.toString())
};
