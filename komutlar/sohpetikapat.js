
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("ADMINIASTOR")) return message.channel.send(":warning: `Bunu Yapmaya Yetkin Yok!`");



        let sohpet = message.guild.channels.find('name', `💬sohbet`);
        let rol = message.guild.roles.find('name', "o");

        let rol2 = message.guild.roles.find('name', "Üye");
        let rol3 = message.guild.roles.find('name', "Erkek");
        let rol4 = message.guild.roles.find('name', "Kız");
        let rol5 = message.guild.roles.find('name', "Uyarı 1");
        let rol6 = message.guild.roles.find('name', "Uyarı 2");
        let rol7 = message.guild.roles.find('name', "Uyarı 3");
        let rol8 = message.guild.roles.find('name', "Küfür");
        let rol9 = message.guild.roles.find('name', "Hakaret");
        let rol10 = message.guild.roles.find('name', "Reklam");
        let rol11 = message.guild.roles.find('name', "Aktif Üye");
        let rol12 = message.guild.roles.find('name', "Susturuldu");
        let rol13 = message.guild.roles.find('name', "Müzik 1");
        let rol14 = message.guild.roles.find('name', "Müzik 2");
        let rol15 = message.guild.roles.find('name', "Müzik Kapalı");


            if(!sohpet) return message.channel.send(":warning: `Kanalını Bulamıyorum!`")

            sohpet.overwritePermissions(rol2, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol3, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol4, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol5, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol6, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol8, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            sohpet.overwritePermissions(rol12, {'SEND_MESSAGES': false,})
            sohpet.overwritePermissions(rol13, {'SEND_MESSAGES': false,})
            sohpet.overwritePermissions(rol14, {'SEND_MESSAGES': false,})
            sohpet.overwritePermissions(rol15, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            sohpet.overwritePermissions(rol11, {'SEND_MESSAGES': false,})


            sohpet.overwritePermissions(rol7, {'SEND_MESSAGES': false,})

            sohpet.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })




            sohpet.overwritePermissions(rol, {
                SEND_MESSAGES: false

            });





            let sohpetiaçembed = new Discord.RichEmbed()
            .setAuthor("Tüm Server Sohbet Kapatıldı !", `${message.author.avatarURL}`)
            .setDescription(`${message.author.username} Server Sohbetini Kapattı!`)
            .setColor("#0dc900")
            .setFooter("©️ Yılmaz BOT İhsanY Tarafından Kodlanmıştır")
            .setTimestamp()
            .addBlankField()
            .addField("Sohbet Tekrar Açılana kadar Konuşulamaz!")
            .addBlankField()

                kanal.send(sohpetiaçembed)





        //kod bitiş
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
    name: 'sohbetikapat',
    description: '',
    usage: ''
};
