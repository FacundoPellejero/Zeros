module.exports = async (client, message) => {
	if (message.author.bot) return;

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const cont = messageArray.slice(1);
	const args = cont.join(' ');

	if (message.author.bot || message.channel.type === 'dm') return;

	const prefix = '<<';

	if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(`El prefijo en ${message.guild.name} es \`${prefix}\`\n\nPara obtener una lista de comandos: \`${prefix}help\``);

	// if (!message.content.startsWith(prefix)) return;
	// const commandfile = client.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));
	// Para que funcione con cualquier comando sin el prefijo sería quitando .slice(prefix.length).etc a la linea anterior
	const commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));
	if (commandfile) {
		commandfile.run(client, message, args);
	}
};