const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if(args[0] == "help"){
        message.reply("!skin < oyuncu adı >");
        message.delete();
         return;
         }

    let command = message.content.split(" ")[0];
              const mcargs = message.content.split(" ").slice(1).join(" ")
      if (!mcargs) return message.channel.send("** Oyuncu Adı Yazmalısın! **");
      message.delete();

      const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`${mcargs} Adlı Oyuncunun Skin'i\n** **`)
      .setImage(`https://minotar.net/armor/body/${mcargs}`)
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
    name: 'skin',
    description: 'Minecraft Skini Gösterir',
    usage: 'skin'
  };