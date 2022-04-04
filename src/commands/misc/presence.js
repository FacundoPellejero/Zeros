const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const botOwnerID = 1;
	if (message.author.id == botOwnerID) {
		if (!args) return;
		client.user.setActivity(args.toString(), { type: 'PLAYING' });
		message.channel.send('Actividad actualizada :sunglasses:');
	}
	else {
		message.channel.send('Este comando solo puede ser utilizado por el dev 👺');
	}

};

module.exports.config = {
	name: 'presence',
	aliases: ['act'],
};

