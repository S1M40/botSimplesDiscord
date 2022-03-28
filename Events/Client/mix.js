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
    

        //Mete aqui os comandos que queres que o bot Responda
        // comando 

        if(comando === "") {
            const m = message.reply("");
            
        }
        //comando insta

        if(comando === "insta") {
            const m = await message.reply("");
        }
  
        //comando twitter
  
        if(comando === "twitter") {
            const m = await message.reply("");
        }
    }

}