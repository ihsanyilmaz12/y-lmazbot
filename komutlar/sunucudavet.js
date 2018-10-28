const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
	  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`Davetlinkioluştur` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
	if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) {
		   message.channel.sendMessage('**Bu komutu kullanmak için yetkin yok.**')
    }else{
	if (talkedRecently.has(message.author.id))
  return message.channel.send("**Davetlinkioluştur komutunu korumalıdır! 10 saniye sonra tekrar deneyiniz.**");
if (message.author.bot) return;
if(message.webhookID) return;

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 10000);
message.channel.createInvite().then(invite =>
    message.channel.send(invite.url + ' Davet linki oluşturuldu.')
);
	}
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sd'],
  permLevel: 4
};

exports.help = {
  name: 'davetoluştur',
  description: 'Sunucu davet linki oluşturur.',
  usage: 'sunucu-davet'
};