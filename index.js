const ClientManager = require('./src/ClientManager');
const client = new ClientManager({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	// intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
	intents: 32767,
	disableMentions: 'everyone',
});

client.setup();