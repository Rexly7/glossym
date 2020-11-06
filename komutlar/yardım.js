const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let müzik = new Discord.RichEmbed()  
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('RANDOM')
.addField('Glossy | Müzik Komutları',`
**m&çal <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**m&duraklat** : Çalan Şarkıyı Durdurur
**m&devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**m&tekrar** : Çalan Şarkıyı Tekrarlar
**m&geç** : Bi Sonraki Şarkıya Geçiş Yapar
**m&durdur** : Şarkıyı Durdurur 
**m&çek** : Botu Sese Çeker 
**m&ses** : Ses Seviyesini Belirler`)
.setFooter('Yapımcı Mert/Rexly#7777')
 message.channel.send(müzik) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["müzik","yardım","help"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
  