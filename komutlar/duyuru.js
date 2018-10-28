const Discord = require('discord.js');


exports.run = (client, message, args) => {
  if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('***Bot', client.user.avatarURL).setTimestamp()); }
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın:exclamation: :exclamation:');

    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` Duyuru Yaptı`)
    .setColor("#18BF7E")
    .setDescription(`${mesaj}`)
    .setFooter("©️ Yılmaz BOT ", " ")
    .setTimestamp()
    .setThumbnail('https://i.imgyukle.com/2018/10/28/xoYJx.pngn')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
