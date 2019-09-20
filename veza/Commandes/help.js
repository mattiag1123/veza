const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("HELP")
    .setDescription("Panneau d'aide :ok_hand:")
    .setColor("#15f153")
    .addField("Fun", "Rencontre     Love ")
    .addField("Modération", ".ban = bannis la personne mentionée")
    message.channel.send(botembed);
}

module.exports.help = {
  name: "help"
}