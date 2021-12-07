const fs = require('fs');

function loadCommands(client) {
	fs.readdir('./src/commands/', (err, cmdfolders) => {

		if (err) console.log(err);

		if (!cmdfolders[0]) return console.log('No hay comandos en la carpeta');
		cmdfolders.forEach((cmdfolder) => {
			fs.readdir(`./src/commands/${cmdfolder}`, (err, cmds) => {
				if (!cmds) return console.error(`No se encontraron comandos en la carpeta ${cmdfolder}`);
				cmds = cmds.filter(z => z.split('.')[1] === 'js');
				cmds.forEach((cmd) => {
					const pull = require(`../commands/${cmdfolder}/${cmd}`);
					client.commands.set(pull.config.name, pull);
					// eslint-disable-next-line max-nested-callbacks
					pull.config.aliases.forEach((alias) => {
						client.aliases.set(alias, pull.config.name);
					});
				});
			});
		});
	});
}

module.exports = loadCommands;