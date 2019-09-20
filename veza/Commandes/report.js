module.exports.run = async(client, message, args) => {

    let member = args.slice().join(" ")
    if(!member)
        return message.channel.send("Veuillez préciser un joueur à report !").then(message.delete());
		let reason = args.slice().join(" ");
		if(!reason)
			return message.channel.send("veuiller préciser une raison de report ce joueur").then(message.delete());
	    console.log(`Le joueur ***${message.author.tag}*** a report car **${member.tag}**`)

	client.users.get("584755804372992010").send(`L'utilisateur ***${message.author.tag}*** a report car ***${member}***`);
	
	message.channel.send(`Report effectué car **${member}**`);
};

module.exports.help = {
	name: "report"
}