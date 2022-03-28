const {MessageEmbed, Message,  WebhookClient} = require("discord.js");

module.exports={
    name: "messageUpdate", 

    /**
     * @param {Message} oldMessage
     * @param {Message} newMessage
     */
    execute(oldMessage, newMessage){
        if(oldMessage.author.bot) return;

        if(oldMessage === newMessage) return;

        const count = 1950;

        //cria um log de mensagens editadas no servidor 

        const Original = oldMessage.content.slice(0, count) + (oldMessage.content.length > 1950 ? " ..." : "");
        const Edited = newMessage.content.slice(0, count) + (newMessage.content.length > 1950 ? " ..." : "");

        const log = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`📘A [Mensagem](${newMessage.url}) de ${newMessage.author} foi editada em ${newMessage.channel}.\n
        **Original**:\n ${Original} \n **Editado**: \n ${Edited}`.slice("0", "4096"))
        .setFooter(`Usuário: ${newMessage.author.tag} | ID: ${newMessage.author.id}`);

        new WebhookClient({url: "URL do WebHook Criado"}).send({embeds: [log]}).catch((err) => console.log(err));



    }
}