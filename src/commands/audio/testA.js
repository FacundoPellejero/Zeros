const Discord = require('discord.js')
const voiceDiscord = require('@discordjs/voice')


module.exports.run = async (client, message, args) => {

  const channel = message.member.voice.channel;
  if(!channel) return message.channel.send('Metete a un voice down <:e_:762090092592234517>');

  const player = voiceDiscord.createAudioPlayer();
  const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/892131479222644770/917835621391822988/Thank_You_My_Twilight_The_Pillows.mp3');

  const connection = voiceDiscord.joinVoiceChannel({
    channelId: channel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator,
  });

  player.play(resource);
  connection.subscribe(player);

  //check end, leave vc
  player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
    connection.destroy();
  });

};

module.exports.config = {
	name: 'testA',
	aliases: ['test', 'play'],
};

