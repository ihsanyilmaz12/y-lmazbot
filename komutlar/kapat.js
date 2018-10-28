const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç




        let kanal = message.guild.channels.find('name', `1`);
        let kanal2 = message.guild.channels.find('name', `2`);
        let kanal3 = message.guild.channels.find('name', `3`);
        let kanal4 = message.guild.channels.find('name', `4`);
        let kanal5 = message.guild.channels.find('name', `5`);
        let kanal6 = message.guild.channels.find('name', `6`);
        let kanal7 = message.guild.channels.find('name', `7`);
        let kanal8 = message.guild.channels.find('name', `10`);
        let kanal9 = message.guild.channels.find('name', `8`);
        let kanal10 = message.guild.channels.find('name', `9`);

        let rol = message.guild.roles.find('name', "o");

        let rol2 = message.guild.roles.find('name', "Üye");
        let rol3 = message.guild.roles.find('name', "Uyarı 1");
        let rol4 = message.guild.roles.find('name', "Uyarı 2");
        let rol5 = message.guild.roles.find('name', "Uyarı 3");
        let rol6 = message.guild.roles.find('name', "Hakaret");
        let rol7 = message.guild.roles.find('name', "Suç 1");
        let rol8 = message.guild.roles.find('name', "UPDATE");
        let rol9 = message.guild.roles.find('name', "Suç 2");
        let rol10 = message.guild.roles.find('name', "Suç 3");

            if(!kanal) return message.channel.send(":warning: `Kanalını Bulamıyorum!`")

            kanal.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol2, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol2, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol3, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol3, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol4, {'SEND_MESSAGES': false,})
        kanal10.overwritePermissions(rol4, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol5, {'SEND_MESSAGES': false,})
             kanal10.overwritePermissions(rol5, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol6, {'SEND_MESSAGES': false,})
kanal10.overwritePermissions(rol6, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol7, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol7, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal2.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal3.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal4.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal5.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal6.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal7.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal8.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
            kanal9.overwritePermissions(rol8, {
                SEND_MESSAGES: false
            })
kanal10.overwritePermissions(rol8, {'SEND_MESSAGES': false,})


            kanal.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol9, {'SEND_MESSAGES': false,})
            kanal10.overwritePermissions(rol9, {'SEND_MESSAGES': false,})

            kanal.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal2.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal3.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal4.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal5.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal6.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal7.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal8.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
            kanal9.overwritePermissions(rol10, {'SEND_MESSAGES': false,})
kanal10.overwritePermissions(rol10, {'SEND_MESSAGES': false,})







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
            kanal2.send(sohpetiaçembed)
            kanal3.send(sohpetiaçembed)
            kanal4.send(sohpetiaçembed)
            kanal5.send(sohpetiaçembed)
            kanal6.send(sohpetiaçembed)
            kanal7.send(sohpetiaçembed)
            kanal8.send(sohpetiaçembed)
            kanal9.send(sohpetiaçembed)
            kanal10.send(sohpetiaçembed)






        //kod bitiş
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'genelkapat',
  description: '',
  usage: 'kapat'
};
