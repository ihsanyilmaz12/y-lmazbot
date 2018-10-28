const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

            //başlangıç

            let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
            if(!wUser) return message.reply(":warning: `Lütfen Uyarmak İstediğin Kullanıcınında İsmini Yaz`");
            if(wUser.hasPermissions("MANAGE_MESSAGES")) return message.reply(":warning: `Bu Kullanıcıyı Uyaramazsın!`");
            let reason = args.join(" ").slice(22);
            if(!reason) return message.reply(":warning: `Lütfen Geçerli Bir Sebep Bir`")




            let uyarı1 = message.guild.roles.find("name", "Uyarı 1");
            let uyarı2 = message.guild.roles.find("name", "Uyarı 2");
            let uyarı3 = message.guild.roles.find("name", "Uyarı 3");

                //uyarı 1
            let uyarıembed1 = new Discord.RichEmbed()
            .setAuthor("Uyarı Sistemi")
            .setColor("#808080")
            .addField("Uyarılan", wUser)
            .addField("Uyaran Yetkili:", `${message.author}`)
            .addField("**Toplam Uyarı**", "1")
            .addField("Sebep", reason)
            .setThumbnail("https://cdn.pixabay.com/photo/2013/07/13/12/09/sign-159285_960_720.png")
            .setFooter("©️ Yılmaz BOT ", " ")
            .setTimestamp()
                message.delete();

                //uyarı 2
            let uyarıembed2 = new Discord.RichEmbed()
            .setAuthor("Uyarı Sistemi")
            .setColor("#808080")
            .addField("Uyarılan", wUser)
            .addField("Uyaran Yetkili:", `${message.author}`)
            .addField("**Toplam Uyarı**", "2")
            .addField("Sebep", reason)
            .setThumbnail("https://cdn.pixabay.com/photo/2013/07/13/12/09/sign-159285_960_720.png")
            .setFooter("©️ Yılmaz BOT ", " ")
            .setTimestamp()
                message.delete();

                //uyarı 3
            let uyarıembed3 = new Discord.RichEmbed()
            .setAuthor("Uyarı Sistemi")
            .setColor("#808080")
            .addField("Uyarılan", wUser)
            .addField("Uyaran Yetkili:", `${message.author}`)
            .addField("**Toplam Uyarı**", "3")
            .addField("Sebep", reason)
            .setThumbnail("https://cdn.pixabay.com/photo/2013/07/13/12/09/sign-159285_960_720.png")
            .setFooter("©️ Yılmaz BOT ", " ")
            .setTimestamp()
                message.delete();

            let warnchannel = message.guild.channels.find('name', "uyarılanlar");
            if(!warnchannel) return message.reply(":warning: **`uyarılanlar`**`Adında Bir Kanal Göremiyorum Lütfen Kontrol Et!`");








  //3.uyarı
  if(wUser.roles.has(uyarı3.id)) {
    //sunucudan Atılır
    wUser.ban()
}


                        if(wUser.roles.has(uyarı2.id)) {
                            wUser.addRole(uyarı3).catch(console.error);
                            warnchannel.send(uyarıembed3);
                message.channel.send(uyarıembed3);
                wUser.kick()
                            //sunucudan atılır
                        }




                            if(wUser.roles.has(uyarı1.id)) {
                                wUser.addRole(uyarı2).catch(console.error);
                                warnchannel.send(uyarıembed2);
                            message.channel.send(uyarıembed2);

                            }


                            if(!wUser.roles.has(uyarı1.id)) {
                                wUser.addRole(uyarı1).catch(console.error);
                                warnchannel.send(uyarıembed1);
                                message.channel.send(uyarıembed1);

                            }



















            //bitiş

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};
