module.exports.run = async (client, message, args) => {
	const botOwnerID = 497515233104101376;
	if (message.author.id == botOwnerID) {
		if (!args) return;
		if (args.toString() === 'dnd') {
			client.user.setPresence({ activities: [{ name: 'Dungeons n Dragons' }], status: args.toString() });
			message.channel.send('Status actualizado a ' + args.toString() + ' :sunglasses:');
		}
		else {
			client.user.setPresence({ activities: [{ name: 'Minecraft' }], status: args.toString() });
			message.channel.send('Status actualizado a ' + args.toString() + ' :sunglasses:');
		}

	}
	else {
		message.channel.send('Este comando solo puede ser utilizado por el dev 👺');
	}
};

module.exports.config = {
	name: 'status',
	aliases: [],
};

