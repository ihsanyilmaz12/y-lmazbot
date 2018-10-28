const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Kayıt Yapman İçin Yetkin Yok!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Böyle Bir Kullanıcı Mevcut Değil!");
  let aRole = message.guild.roles.find(`name`, "Üye");

  if(rMember.roles.has(aRole.id)) return message.reply("Üye Zaten Kayıtlı!");
  await(rMember.addRole(aRole.id));
  message.channel.send(':key: Başarıyla Üye Rolü Verildi!')
  message.react('484819933746692106');
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
   
exports.help = {
    name: 'kayıt',
    description: 'Returns a list of members with an invite as their game.',
    usage: 'checkinvites'
};