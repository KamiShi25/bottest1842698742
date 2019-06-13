const Discord = require('discord.js')
const bot = new Discord.Client

var prefix = "?"

bot.on('ready', function() {
    bot.user.setGame("Command: *help*");
    console.log("Connecté");
});
 
bot.login ('');

bot.on('message', message => {
    if (message.content === prefix + "help" ){
        message.channel.sendMessage("Liste des commandes: \n -*__help__*");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué")

    }
});
