const {Client , Collection, MessageEmbed} = require("discord.js");
const client = new Client({intents : 32767})
const config = require("./config.json")
const randomPuppy = require("random-puppy");


client.commands = new Collection()


require("./handlers/Events")(client);
require("./handlers/comandos")(client);

client.on('message', async(message)=>{
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
    // comando ping
    if(comando === "ping") {
    const m = await message.reply("Ping?");
    m.edit(`O ping é ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
})



client.on('message', async(message) => {
    
  
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(!message.content.startsWith(config.prefix1)) return;

  const args = message.content.slice(config.prefix1.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  
  const SubReddits = ["Subreddits de memes"]; //exemplos ("meme", "me_irl", "memes", "funny")

  const random = SubReddits[Math.floor(Math.random()* SubReddits.length)];

  const img = await randomPuppy(random);
      

  const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`De /r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

      if(comando === "meme"){
        const m = await message.reply({embeds: [embed]});
      }   
               
})





client.login(config.TOKEN)



