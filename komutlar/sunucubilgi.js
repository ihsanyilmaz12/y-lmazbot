const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor("#15f153")
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Oluşturulma tarihi:', message.guild.createdAt)
    .setThumbnail(message.guild.iconURL);
    return message.channel.sendEmbed(sunucubilgi);
    }
	message.react("😂")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 4
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
