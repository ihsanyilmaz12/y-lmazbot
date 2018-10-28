exports.run = async (bot, message, args, Discord) =>
{
  message.delete()

  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply({embed:
  {
    color: 0xC64540,
    description: ":negative_squared_cross_mark: Bunu Yapmak İçin Gerekli Yetkiye Sahip Değilsin!"
  }
  });
  
  let DMMesaj = args.join(" ").slice(0);
  if (!DMMesaj) return message.channel.send({embed:
  {
    color: 0xC64540,
    description: `${message.member} Mesaj Gir.`
  }
  });

  message.guild.members.forEach((player) =>
  {
      message.guild.member(player).send({embed:
      {
        color: 0x00c1c1,
        title: `${message.guild.name}`,
        description: `${DMMesaj}`,
        footer:
        {
          text:  `${message.author.tag}`
        }
      }
      });
  });
    message.channel.send({embed:
    {
      color: 0xC64540,
      description: "Mesajınız Sunucudaki Herkese DM Olarak Gönderildi."
    }
    })
    .then(msg => msg.delete(1000));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
  
  exports.help = {
    name: 'herkesedm',
    description: '',
    usage: ''
  };