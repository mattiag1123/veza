const Discord = require('discord.js');
var token = 'NjE1MDg1MjIzMDQxOTU3ODg5.XYIlUQ.pZ5H_FSEEPTBe_VE_AiCZ9ALaNI'

module.exports.run = async(client, message, args) => {

    if (message.author.id === "584755804372992010") {

        message.channel.send("Redémarrage dans quelque instant...")
        client.destroy()
    
        client.login(token)
    
        message.channel.send("Redémarrage effectué!")
    
        } else {
    
          
    
          message.channel.send("Vous ne possédez a pas les permissions requises ! x")
         
    }
};

module.exports.help = {
    name: 'reboot'
};