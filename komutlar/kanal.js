const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
	if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send("Kanal oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanal-aç'],
  permLevel: 4
};

exports.help = {
  name: 'kanal-aç',
  description: 'Bir yazı kanalı açar',
  usage: 'yazı-kanal-aç [açmak istediğiniz kanalın adı]'
};
