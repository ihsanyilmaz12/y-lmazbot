const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç

        if(!message.member.hasPermissions("ADMINASTOR")) return message.channel.send(":warning: `Bunu Yapmaya Yetkin Yok!`");



        let kanal = message.guild.channels.find('name', `🍀genel-sohbet`);
        let kanal2 = message.guild.channels.find('name', `🎮oyun-odası`);
        let kanal3 = message.guild.channels.find('name', `🎨tasarım-vitrin`);
        let kanal4 = message.guild.channels.find('name', `öneri-ve-görüş`);
        let kanal5 = message.guild.channels.find('name', `destek-odası`);
        let kanal6 = message.guild.channels.find('name', `müzikchat`);
        let kanal7 = message.guild.channels.find('name', `hatalar`);
        let kanal8 = message.guild.channels.find('name', `komut-kullanma`);
        let kanal9 = message.guild.channels.find('name', `müzik-komut`);
        let kanal10 = message.guild.channels.find('name', `bot-chat`);

        let rol = message.guild.roles.find('name', "o");

        let rol2 = message.guild.roles.find('name', "Üye");
        let rol3 = message.guild.roles.find('name', "Uyarı 1");
        let rol4 = message.guild.roles.find('name', "Uyarı 2");
        let rol5 = message.guild.roles.find('name', "Uyarı 3");
        let rol6 = message.guild.roles.find('name', "Hakaret");
        let rol7 = message.guild.roles.find('name', "Suç 1");
        let rol8 = message.guild.roles.find('name', "Küfür");
        let rol9 = message.guild.roles.find('name', "Altın");
        let rol10 = message.guild.roles.find('name', "Demir");
            if(!kanal) return message.channel.send(":warning: `Kanalını Bulamıyorum!`")

            kanal.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol2, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol2, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol3, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol3, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol4, {'SEND_MESSAGES': true,})
        kanal10.overwritePermissions(rol4, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol5, {'SEND_MESSAGES': true,})
             kanal10.overwritePermissions(rol5, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol6, {'SEND_MESSAGES': true,})
kanal10.overwritePermissions(rol6, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol7, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol7, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal2.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal3.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal4.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal5.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal6.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal7.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal8.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
            kanal9.overwritePermissions(rol8, {
                SEND_MESSAGES: true
            })
kanal10.overwritePermissions(rol8, {'SEND_MESSAGES': true,})


            kanal.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol9, {'SEND_MESSAGES': true,})
            kanal10.overwritePermissions(rol9, {'SEND_MESSAGES': true,})

            kanal.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal2.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal3.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal4.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal5.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal6.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal7.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal8.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
            kanal9.overwritePermissions(rol10, {'SEND_MESSAGES': true,})
kanal10.overwritePermissions(rol10, {'SEND_MESSAGES': true,})





            let sohpetiaçembed = new Discord.RichEmbed()
            .setAuthor("Tüm Server Sohpeti Açıldı !", `${message.author.avatarURL}`)
            .setDescription(`${message.author.username} Server Sohbetini Açtı!`)
            .setColor("#0dc900")
            .setFooter("©️ Yılmaz BOT İhsanY Tarafından Kodlanmıştır")
            .setTimestamp()
            .addBlankField()
            .addField("Artık Konuşabilirsiniz!", "İhsanY Sohbeti Açtı Kurallara Uyarak Dilediğin Gibi Sohbet Edebilirsin")
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
  name: 'genelaç',
  description: '',
  usage: 'aç'
};
