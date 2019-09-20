const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("PingDescription")
    .setDescription("Description de la commande ping")
    .setColor("#15f153")
    .addField("Vous repond pong :ping_pong: et vous donne le nombre de ms de l'A.P.I")
}

module.exports.help = {
  name: "pingD"
}