const {client} = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
    name: 'ready',
    once : true,
    /**
     * 
     * @param {client} client 
     */
    execute(client) {
        console.log('the client is ready')
        client.user.setActivity('Invicta Esports' , {type: 'COMPETING'}); //Define a Atividade do Bot, Pode ser ["STREAMING", "PLAYING", "COMPETING", "LISTENING"]

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("O cliente está conectado na base de dados");
        }).catch((err) => {
            console.error(err);
        });
    }
}