const ms = require('ms');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = (client, message, args) => {
  if (!message.guild) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Doğru kullanım: ' + prefix + 'kilit <süre örneğin:** d , m , s **>');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Kanal kilidi açıldı.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`**Kanal kilitlendi! ** ***Süre:*** __***${ms(ms(time), { long:true })}***__ @everyone `).then(() => {
      message.channel.send("#  +----------------------------------------------------------------+  #");
      message.channel.send("#   |                                  |  Kanal Susturuldu.  |                               |   #");
      message.channel.send("#  +----------------------------------------------------------------+  #");

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('**Kanalın kilidi açıldı! @everyone**')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'kilit',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kilit <süre>'
};
