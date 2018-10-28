const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.channel.name)
    .setThumbnail("https://media.discordapp.net/attachments/461239080466907154/465563672274796556/kb.jpg")
      .addField('Ad:', message.channel.name, true) 
      .addField('ID', message.channel.id, true)
      .addField('Pozisyonu:', message.channel.position, true) 
      .addField('Konu', message.channel.topic, true)
             console.log("/kanalbilgi komutu " + message.author.username + " tarafından kullanıldı.")
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanal', 'kbilgi','channel','channel-information','channel-data','kanal-bilgi'],
  permLevel: 3
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Bulunduğunuz kanal hakkında bilgi verir.',
  usage: 'kanalbilgi'
};