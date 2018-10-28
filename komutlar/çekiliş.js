const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
  const embedçekiliş = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Çekilişi Kazanan: ${message.guild.members.random().displayName}`)
      .setFooter("©️ Yılmaz BOT ", " ")
      .setTimestamp()
  message.delete();
  message.channel.sendEmbed(embedçekiliş);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekilişyap','çekiliş-yap','lottery'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş yapar.',
  usage: 'çekiliş'
};