const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('***Bot', client.user.avatarURL).setTimestamp()); }
 message.delete();

let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor([0,101,255])
  .setImage(mention.avatarURL)
  .setFooter("©️ Yılmaz BOT | Avatar Sistemi ", " ")
  .setTimestamp()
  .addField('Avatar', `[Avatarın büyük halini göster!](${message.author.avatarURL})`, false);
  message.react("484819933746692106");
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor([0,101,255])
  .setImage(message.author.avatarURL)
  .setFooter("©️ Yılmaz BOT | Avatar Sistemi ", " ")
  .setTimestamp()
  .addField('Avatarın', `[Avatarın büyük halini göster!](${message.author.avatarURL})`, false);
  message.react("484819933746692106");
  message.channel.send(avatarEmbedYou);
  return;
}
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatar',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
