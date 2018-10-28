const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const connections = new Map();
require('./util/eventLoader')(client);

var prefix = '!';
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '🎉hoşgeldiniz'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı 🎉')
  .setFooter("©️ Yılmaz BOT ", " ")
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'güle-güle');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı | Görüşmek üzere!')
  .setFooter("©️ Yılmaz BOT ", " ")
  .setTimestamp()
  channel.sendEmbed(embed);
});


bot.on("message", message => {

  const reklam = ["discord.gg/", "discord.gg"];
  if (reklam.some(word => message.content.includes(word))) {
    message.reply(":warning: Discord Sunucu Reklamı Yapma :warning:")
    message.delete();
  }
});

bot.on("message", message => {

  const Hakaret = ["veled", "salak", "salağı", "velet"];
  if (Hakaret.some(word => message.content.includes(word))) {
    message.reply(":warning: Hakaret Etme :warning:")
    message.delete();
  }
});

bot.on("message", message => {

  const kufur = ["amk", "aq", "amk", "amq", "sikik", "amcık", "göt", "sik", "oç", "orospu", "çocuğu", "piç"];
  if (kufur.some(word => message.content.includes(word))) {
    const embed = new Discord.RichEmbed()
    message.reply(":warning: Küfür Etme :warning:")
    message.delete();
  }

});

bot.on("message", message => {

  const youtube = ["https://www.youtube.com/channel/", "www.youtube.com/channel/"];
  if (youtube.some(word => message.content.includes(word))) {
    message.reply(":warning: Youtube Kanal Reklamı Yapma :warning:")
    message.delete();
  }

});

bot.on("message", message => {

  const etiket = ["<@484708591694118914>", "@İhsan", "@İhsan#2315 ", " <@!484708591694118914> ", "@İhsanY"];
  if (etiket.some(word => message.content.includes(word))) {
    message.reply('İhsan meşgul ben senle ilgileyim...');
    message.delete();
  }
});

bot.on("message", message => {

  const etiket = ["!emojiyazı"];
  if (etiket.some(word => message.content.includes(word))) {
    message.delete();
  }
});

bot.on("message", message => {

  const etiket = ["!at"];
  if (etiket.some(word => message.content.includes(word))) {
    message.delete();
  }
});

bot.on("message", message => {

  const etiket = ["!ban"];
  if (etiket.some(word => message.content.includes(word))) {
    message.delete();
  }
});

client.on('message', msg => {
  if (msg.content === '<@484708591694118914>') {
    msg.reply('İhsan oyun oynuyor ben senle ilgileyim...');
    msg.delete();
  }
});


client.on('message', msg => {
  if (msg.content === '@İhsanY') {
    msg.reply('İhsan meşgul ben senle ilgileyim...');
    msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content === ' <@!484708591694118914> ') {
    msg.reply('İhsan meşgul ben senle ilgileyim...');
    msg.delete();
  }
});

client.on('message', msg => {
  if (msg.content === '@İhsan#2315 ') {
    msg.reply('İhsan meşgul ben senle ilgileyim...');
    msg.delete();
  }
});


client.on('message', msg => {
  if (msg.content === '<@!484708591694118914>') {
    msg.reply('İhsan meşgul ben senle ilgileyim...');
    msg.delete();
  }
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip2) permlvl = 4;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(oç|orospu tohumu|orospu çocuğu|aq|tecavüz|sex|oç|piç|yaramı|yarramı|yarak|yarrak|tassak|tasak|pezevenklik|a m ı nı|pezemenklillik|S E X|m k|m     k|m                      k|AMINI DE S İ Yİ M|amk|AMK|A M K|a m k)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.channel.send(`\`${msg.author.username}\` **Küfür yasaktır :no_entry:**`).catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
  const cl = msg.guild.channels.find("name", "mesaj-log");
  if (!cl) return;
  if (msg.content.startsWith("`") || msg.content.startsWith("https://")) return;
  if (msg.content < 1) return;
  if (msg.author.bot) return;
  if (!cl) {
    return;
  } else {
    cl.sendMessage(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] <#${msg.channel.id}> | ${msg.author.tag}: ${msg.content}`);
  }
});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
bot.login(ayarlar.token);