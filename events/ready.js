const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

console.log('Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');

    var Games = [

        "İhsanY",

        "https://discord.gg/vrPjwGW",

		`${client.users.size} Kullanıcı ✨`,

		`${client.guilds.size} Sunucu`,

    `Beta v0.0.1`






    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random], "https://discord.gg/MpM7S8y");
        }, 2 * 3500);

};
