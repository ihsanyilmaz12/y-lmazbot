const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('!şikayet = İstediğiniz Kullanıcıyı Şikayet Edersiniz. \n!talep =Destek Odası Açar [BETA] \n!hata = Hata Bildirmenizi Sağlar \n!öneri = Öneride Bulanabilirsin.\n!avatar = Avatar Gösterir. \n!başarım = Minecraft Başarım Yazısı Yazdırır. \n!skin = Minecraft Oyuncu Skinini Görürsünüz. \n !kafa = Minecraft Oyuncu Skinini Kafasını Görürsünüz. ')
  .setColor(0x00ffff)
  .setFooter("©️ Yılmaz BOT ", " ")
  .setTimestamp()
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
