const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if (message.author.id !== "584755804372992010") 
  {  return console.log(`L'utilisateur ${message.author.tag} à saisi la commande say sur le serveur ${message.guild.name}`);
     client.users.get("584755804372992010").send(`L'utilisateur ${message.author.tag} à saisi la commande say sur le serveur ${message.guild.name}`);}

  let botmessage = args.join(" ");
  message.channel.send(botmessage);
  
}

module.exports.help = {
  name: "say"
}
