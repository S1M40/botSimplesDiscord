const {MessageEmbed, WebhookClient, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    
    execute (member) {
        const {user, guild} = member;

        member.roles.add("") //ID do role que queres adicionar automaticamente

        const welcomer = new WebhookClient({
            id: "", //id do webhook criado
            token: "" //token do webhook criado
        });

        const Bem_Vindo = new MessageEmbed()
        .setColor("AQUA")
        

        //criar uma mensagem de boas vindas ao servidor
        //é so um exemplo, pode ser mudado à discrição do utilizador 
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} Seja Bem Vindo a **${guild.name}**!\n
        ➤Leia as Regras do Servidor<#idDoCanal>\n
        ➤Se precisares de ajuda Abre um ticket e fala com um @Staff\n
        ➤Se queres entrar para a equipa Faz a tua candidatura na Sala Apropriada\n
        ➤Diverte-te`)
        .setFooter(`Invicta Esports © Todos os Direitos Reservados`)

        welcomer.send({embeds: [Bem_Vindo]})

    }

}