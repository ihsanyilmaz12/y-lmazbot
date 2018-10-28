const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let guild = message.guild
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':no_entry: Kac Mesaj Silmek Istiyorsunuz?`');
    let temizle = guild.channels.find('name', 'mesaj-sil-log');
	if (!temizle) return message.reply('`log` kanalını bulamıyorum.');
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('`temizle` adlı komutu özel mesajlarda kullanamazsın.')
        return message.author.send(ozelmesajuyari); }
        if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
          const botunmesajyonet = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTimestamp()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
          return message.author.send(botunmesajyonet);
        }
        let messagecount = parseInt(args.join(' '));
        message.channel.fetchMessages({
          limit: messagecount
        }).then(messages => message.channel.bulkDelete(messages));
          const sohbetsilindi = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTimestamp()
          .addField('Eylem:', 'Sohbet silme')
          .addField('Sildi Mesaj',  `${mesaj}`)
          .addField('Yetkili:', message.author.username)
          .addField('Sonuç:', `Başarılı`)
          guild.channels.get(temizle.id).send(sohbetsilindi);
          const sonuc = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription('Sohbet Temizlendi.')
          message.channel.send(sonuc);
          message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};
