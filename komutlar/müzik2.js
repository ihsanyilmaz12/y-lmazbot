exports.run = async (bot, message, args, Discord) => {
      if (message.author.username.includes("")) {
            if (!message.member.roles.some(r => ["Müzik 2"].includes(r.name))) {
                  var moonEkipRolü = message.guild.roles.find("name", "Müzik 2");
                  var mAuthor = message.guild.members.find('id', message.author.id);
                  var moonNickname = `${mAuthor.displayName}`

                  message.member.addRole(moonEkipRolü);
                  message.member.setNickname(`${moonNickname}`);

                  message.delete();
            }
      }
}

exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [''],
      permLevel: 0
};

exports.help = {
      name: 'müzik2',
      description: '',
      usage: 'müzik'
};