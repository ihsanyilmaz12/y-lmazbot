const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const red = ayarlar.red;
const green = ayarlar.green;
const orange = ayarlar.orange;
const errors = require("../hatalar/hata.js");

exports.run = function(client, message, args) {
    message.delete();
    if(args[0] == "yardım"){
      message.reply("Kullanım: !şikayet <kullanıcı> <Sebep>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Yeni Şikayet @here")
    .setColor(red)
    .addField("Reportlanan Kullanıcı", `${rUser} ID: ${rUser.id}`)
    .addField("Reportlayan Kullanıcı", `${message.author} ID: ${message.author.id}`)
    .addField("Şikayet Edilen Kanal", message.channel)
    .addField("Zaman", message.createdAt)
    .addField("Sebep", rreason)
    .setThumbnail("https://cdn.pixabay.com/photo/2013/07/13/12/09/sign-159285_960_720.png");

    let reportschannel = message.guild.channels.find(`name`, "şikayetler");
    if(!reportschannel) return message.channel.send(" `şikayetler` İsminde Yazı Kanalı Bulamıyorum.!");
    reportschannel.send(reportEmbed);

}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'şikayet',
 description: 'İstediğiniz Kişiyi Şikayet Edersiniz.',
 usage: 'şikayet'
};
