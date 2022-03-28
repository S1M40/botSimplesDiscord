const {MessageEmbed, Message,  WebhookClient} = require("discord.js");
const Logger = require("nodemon/lib/utils/log");

module.exports = {
    name:"messageDelete",

    /**
     * @param {Message} message
     */
     execute(message){
        if(message.author.bot) return;

        //cria um log de mensagens eliminadas no servidor

        const log = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`📕A [Mensagem](${message.url}) de ${message.author} foi eliminada em ${message.channel}.\n
        **Mensagem Eliminada:**\n ${message.content ? message.content : "None"}`.slice(0, 4096))
        .setFooter(`Usuário: ${message.author.tag} | ID: ${message.author.id}`);

        if(message.attachments.size >= 1){
            log.addField(`Ficheiros:`, `${message.attachments.map(a => a.url)}`, true)
        }

        new WebhookClient({url: "URL do WebHook criado"}).send({embeds: [log]}).catch((err) => {console.log(err)});



    }


}