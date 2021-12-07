const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const ping = Math.floor(message.client.ws.ping);
	message.channel.send(`msg ping: \`${Math.floor(message.createdTimestamp - Date.now())} ms\`\nDiscordAPI: \`${ping} ms\``);
	message.channel.send('<:jomjo:762083994308444180>');
	// const jojo = client.emojis.cache.get();
};

module.exports.config = {
	name: 'msgping',
	aliases: ['pingapi'],
};
