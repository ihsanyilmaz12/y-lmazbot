const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('***Bot', client.user.avatarURL).setTimestamp()); }    
    if(args[0] == "help"){
        message.reply("!skin < oyuncu adı >");
         return;
         }

    let command = message.content.split(" ")[0];
              const mcargs = message.content.split(" ").slice(1).join(" ")
      if (!mcargs) return message.channel.send("** Oyuncu Adı Yazmalısın! **");

      const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`${mcargs} Adlı Oyuncunun Skin Kafası\n** **`)
      .setImage(`https://minotar.net/avatar/${mcargs}`)
      .setFooter("©️ Yılmaz BOT ", " ")
      .setTimestamp()

  message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
  exports.help = {
    name: 'kafa',
    description: 'Minecraft Skin kafasını Gösterir',
    usage: 'kafa'
  };