const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	message.channel.send(`Pingacho: ${client.ws.ping}ms.`);
};

module.exports.config = {
	name: 'info',
	aliases: ['restp'],
};

