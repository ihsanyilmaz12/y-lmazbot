const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");

        //kod başlangıç

        
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!wUser) return message.reply(":warning: `Kimin Uyarılarına Bakmak İstediğinide Gir`")
        


        let uyarı1 = message.guild.roles.find("name", "Uyarı 1");
        let uyarı2 = message.guild.roles.find("name", "Uyarı 2");
        let uyarı3 = message.guild.roles.find("name", "Uyarı 3");

                let uyarıicon = message.author.avatarURL

            let uyarıembed1 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#808080")
            .setFooter("Yılmaz BOT | Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`Uyarı Sayısı = 1`, "** **", true)
            .addBlankField()

            let uyarıembed2 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#808080")
            .setFooter("Yılmaz BOT | Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`Uyarı Sayısı = 2`, "** **", true)
            .addBlankField()

            let uyarıembed3 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#808080")
            .setFooter("Yılmaz BOT | Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`Uyarı Sayısı = 3`, "** **", true)
            .addBlankField()

            let uyarıembed0 = new Discord.RichEmbed()
            .setAuthor(`Uyarı Sistemi`, uyarıicon)
            .setDescription(`${wUser} Adlı Kullanıcının Uyarı Sayısı`)
            .setColor("#808080")
            .setFooter("Yılmaz BOT | Uyarı Sistemi")
            .setTimestamp()
            .addBlankField()
            .addField(`Uyarı Sayısı = 0`, "** **", true)
            .addBlankField()





        if(wUser.roles.has(uyarı3.id)) {

                
                message.channel.send(uyarıembed3)
        } else {

        if(wUser.roles.has(uyarı2.id)) {
            
            message.channel.send(uyarıembed2)

        } else {

            if(wUser.roles.has(uyarı1.id)) {
                
                message.channel.send(uyarıembed1)

            } else {


            if(!wUser.roles.has(uyarı1.id)) {
                
                message.channel.send(uyarıembed0)

            } }}}



        //kod bitiş
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
  name: 'uyarılar',
  description: '',
  usage: 'uyarılar'
};
