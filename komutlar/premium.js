const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setFooter("©️ Yılmaz BOT ", " ")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol)
  }
  const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setFooter("©️ Yılmaz BOT ", " ")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Minecraft Premium Hesap: https://freealts.pw/ **\n **Yılmaz BOT**');
  return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium'],
  permLevel: 4
};

exports.help = {
  name: 'premium',
  description: 'Premium Hesab Verir',
  usage: 'premium'
};
