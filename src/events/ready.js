
const presence = ['WATCHING', 'PLAYING', 'LISTENING', 'COMPETING'];
const activities = ['Tu mamรก', 'Minecraft', '.', 'Teto', 'Stardew Valley', 'ANASHEEE', '๐ Spoopy time ๐', '๐ผ ๐ฝ', '๐๐๐', 'Pokemon Emerald Version', 'The Legend of Zelda: Ocarina of Time', 'Super Metroid'];

module.exports = (client) => {
	console.log('tuki');
	client.user.setActivity('Testing xd', { type: 'PLAYING' });
	setInterval(() => {
		const randomIndexAc = Math.floor(Math.random() * (activities.length - 1) + 1);
		const randomIndexPr = Math.floor(Math.random() * (presence.length - 1) + 1);
		const newActivity = activities[randomIndexAc];
		const newPresence = presence[randomIndexPr];

		client.user.setActivity(newActivity, { type: newPresence });
	}, 100000);
	// 2400000
};
