const { CommandInteraction, client, MessageEmbed } = require("discord.js");
const { connection } = require("mongoose");
require("../../Events/Client/ready");

module.exports = {
    name:"status",
    description:"Mostra o estado da conexão da Base de Dados",
    permission:"ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {client} client 
     */

    async execute(interaction, client) {
        const Response = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`**Cliente**: \`🟢 Online\` - \`${client.ws.ping}ms\` \n **UPtime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n 
        **Base De Dados**: \`${switchTo(connection.readyState)}\``)

        interaction.reply({embeds: [Response]})

    }
}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0: status = `❌ Desconectado`
        break;

        case 1: status = `✅ Conectado`
        break;

        case 2: status = `🟠 Conectando`
        break;

        case 3: status = `🟣 Desconectando`
        break;
    }
    return status;
}