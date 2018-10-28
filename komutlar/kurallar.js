
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const botbilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setFooter("©️ Yılmaz BOT ", " ")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**
:x: Başkalarına karşı nazik olun! (Birbirinize saygı duyun)
:x: Küfür kullanmayın. 
:x: Uygunsuz davranışlar, çıplaklık veya hakaret yasaktır!
:x: Spam yapmayın! 
:x: Diğer Minecraft & Discord sunucularını tanıtmayın! (Reklam yapmayın, IP vermeyin)
:x: Ortak sunucuda bulunan herhangi birilerine özelden link atmayın (Davet)
:x: Uygun olmayan bir nickname kullanmayın!
:x: Başkalarını kandırmayın!
:x: Siyasi ve dini konular konuşmak, tartışmak direk ban sebebidir! Sunucuda siyaset yasaktır!
:x: Link paylaşımı yasaktır! (Youtuberlar hariç)
:x: Yetkili takımındaki herkes aktif olamayacağı günü ve sebebi bir üst yetkilisine haber vermelidir. Haber vermeden aktif olmayan yetkililer "yok" yazılacaktır!
:x: Başvuru durumunu herhangi bir yetkiliye sormak otomatik reddedilme sebebidir!
:x: Gerçek ad zorunludur.
:x: Caps Lock kullanmamaya özen gösterin. (Büyük harflerle yazmayın, harf uzatmayın)
:x: Youtuber'ları kesinlikle etiketlemeyin.
:x: Hesap ticareti yasaktır (Alış, satış, istemek veya vermek).
:x: Destek ve sorunlarını #destek-odasi'na yazınız.**`);
    message.channel.sendEmbed(botbilgi) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rules', 'kural'],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'Kuralları atar.',
  usage: 'kurallar'
};