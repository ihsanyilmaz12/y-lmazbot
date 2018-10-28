const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Discord Davet Linkmiz**", `https://discord.gg/tmB7rqj \n`)
  .setFooter("©️ Yılmaz BOT ", " ")
  .setTimestamp()



message.react('484819933746692106');
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet linki', 'davet', 'link'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Davet Linki Paylaşır',
  usage: 'davet'
};
