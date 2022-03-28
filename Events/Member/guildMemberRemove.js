const {MessageEmbed, WebhookClient, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    
    execute (member) {
        const {user, guild} = member;


        const SAIDA = new WebhookClient({
            id: "", //id do webhook criado
            token: "" //token do webhook criado
        });

        //exemplo de mensagem de saida do servidor

        
        const Bem_Vindo = new MessageEmbed()
        .setColor("RED")
        .setAuthor(user.avatarURL,({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} VAI COM DEUS!`)
        .setFooter(``)

        SAIDA.send({embeds: [Bem_Vindo]})

    }

}