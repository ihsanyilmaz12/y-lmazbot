const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('***Bot', client.user.avatarURL).setTimestamp()); }
    let guild = message.guild
    let mesajsayisi = parseInt(args.join(' '));
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sil;').setDescription(message.author.tag + ', kullanım: an!sil <sayı>.').setFooter('ANANBot', client.user.avatarURL).setTimestamp());
    if (mesajsayisi > 100) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sil;').setDescription(message.author.tag + ', 100 adetden fazla mesaj silemem.').setFooter('ANANBot', client.user.avatarURL).setTimestamp());
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesaj +" adet mesaj sildim. Sildiren : `"+message.author.username+'#'+message.author.discriminator +'`')
  message.channel.bulkDelete(2);
  const embed = new Discord.RichEmbed()
  .setColor('#00ff00')
  .setTitle('Mesaj Silme Sistemi')
  .setDescription(`**${message.author.username}** Adlı Yetkili Sil Komutu Kullandı.\n**${message.channel.name}** kanalında`)
  .setFooter('©️ Yılmaz BOT', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail("https://resmim.net/f/BNdmUM.png");
  client.channels.get('493311136217694238').send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 4
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};
