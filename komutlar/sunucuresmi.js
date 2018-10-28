const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`${message.guild.iconURL} `)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-pp'],
  permLevel: 4
};

exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucu Resminin Linkini Atar.',
  usage: 'sunucuresmi'
};
