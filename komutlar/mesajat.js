
const Discord = require('discord.js');
exports.run = function(client, message, args) {

    let dmkisi = message.mentions.users.first();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter("©️ Yılmaz BOT ", " ")
    .setTimestamp()
    .setTitle('Mesaj Sistemi')
    .addField(`❯ Mesaj`, dm)
    .setFooter('Yılmaz BOT | Mesaj Sistemi')
    .setThumbnail('https://i.imgyukle.com/2018/10/28/xorPe.png')
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter("©️ Yılmaz BOT ", " ")
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('Yılmaz BOT | Mesaj Sistemi')
    message.channel.sendEmbed(dmtamam);
    };


exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Mesaj Atar',
  usage: 'mesajat'
};
