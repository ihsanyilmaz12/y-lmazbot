const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('***Bot', client.user.avatarURL).setTimestamp()); }
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
    let users = bot.users;
    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send(":no_entry_sign: Kişi adını veya bir tag yazınız.");
    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
   const embed = new Discord.RichEmbed()
  .setColor(0x36393e)
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Arama Sonuçları \n')
  .setFooter("©️ Yılmaz BOT ", " ")
  .setTimestamp()

  .setDescription(matches.map(u => u.tag).join("\n"))
  message.react('484819933746692106');
  return message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcıara'],
  permLevel: 4
};

exports.help = {
  name: 'ara',
  description: 'İstediğiniz kişiyi arar.',
  usage: 'ara [kullanıcı]'
};