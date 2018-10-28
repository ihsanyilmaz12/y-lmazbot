const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(" :warning: `Kullanıcı Bualmıyorum`");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(" :warning: `Bu Kullanıcıyı Susturamazsın!`");
  let muterole = message.guild.roles.find(`name`, "Susturuldu");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply(" :warning: `Lütfen Geçerli Bir Zaman Gir`");

  await(tomute.addRole(muterole.id));
  message.reply(` :white_check_mark:  <@${tomute.id}> Adlı Kişi ${ms(ms(mutetime))} Boyunca Susturuldu `);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`:white_check_mark:  <@${tomute.id}> Adlı Kişinin Susturma Cezası Kalktı!`);
  }, ms(mutetime));


//end of module
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: 'sürelisustur',
    description: 'İstediğiniz kişiyi  susturur.',
    usage: 'süreli [kullanıcı] [sebep]'
  };