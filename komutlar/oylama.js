const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x: Oylamanın Adını Yazmalısın :x:`)).then(m => m.delete(5000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setTimestamp()
       .setFooter('Yılmaz BOT |', client.user.avatarURL)
       .setFooter("©️ Yılmaz BOT ", " ")
       .setTimestamp()
       .addField(`**OYLAMA**`, `**${question}**`)).then(function(message) {

         message.react('484819931511128097');

         message.react('484819931033108511');

       });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama Yapar.',
  usage: 'oylama'
};
