const { Message } = require("discord.js");
const config = require("../../config.json");


module.exports = {

    name:"message",
    
    /**
    * @param {Message} message
    */
    execute(message){

        
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
        if(!message.content.startsWith(config.prefix1)) return;
        

        const args = message.content.slice(config.prefix1.length).trim().split(/ +/g);
        const comando = args.shift().toLowerCase();
    

        // comando para o bot responder com uma imagem de um pato

        if(comando === "pato") {
            const m = message.reply("https://cdn.discordapp.com/attachments/934590472972812410/955258925672988682/Anas_platyrhynchos_1_600_600.png");
            
        }
    }

}