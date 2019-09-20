const superagent = require("snekfetch");
const Discord = require('discord.js') 
exports.run = async (client, message, args) => { 
var today = new Date()
let Day = today.toString().split(" ")[0]
let Mois = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
 .setColor(`RANDOM`)
.addField("Nous sommes le", `\`${Day}\` ,\`${Mois}\` ,\`${Year}\`\n\`Heure:\` \`${today.toString().split(" ")[4]}\``)
message.channel.send({ embed }) 
}
module.exports.help = {
  name:"time", 
  aliases: []
}
 