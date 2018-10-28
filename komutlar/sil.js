const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Hayır dostum!");
  if(!args[0]) return message.channel.send("Lütfen bir numara belirtin.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Sohbette ${args[0]} mesaj silindi.`).then(msg => msg.delete(30000));
});

}

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
