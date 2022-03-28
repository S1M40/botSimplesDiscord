const { MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = {
    name : "sugestão",
    description : "Cria uma sugestão",
    permission : "ADMINISTRATOR",
    options : [
        {
            name : "tipo",
            description : "Selecione o tipo de sugestão",
            required : true,
            type : "STRING",
            choices : [
                {
                    name : "comando",
                    value : "Comando",
                    description : "Sugere um comando para o bot",

                },
                {
                    name : "geral",
                    value : "geral",
                    description : "Sugere qualquer coisa em geral",

                },
            ]
        },
        {
            name : "nome",
            description : "Dê um nome a sua sugestão",
            type : "STRING",
            required : true
        },
        {
            name : "funcionalidade",
            description : "O que você Sugere?",
            type : "STRING",
            required : true
        },
    ],

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction){
        const { options } = interaction;


        const type = options.getString("tipo");
        const name = options.getString("nome");
        const funcionalidade = options.getString("funcionalidade");


        const response = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${interaction.member} Sugeriu ${type}.`)
        
        .addField("Nome", `${name}`, true)
        .addField("Funcionalidade", `${funcionalidade}`, true)
        

        const message = await interaction.reply({embeds: [response], fetchReply: true})
        message.react("✅")
        message.react("❌")
    }
}