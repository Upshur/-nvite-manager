const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle(`${client.user.username}`)
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("BLUE")
  .setFooter(`© ${client.user.username}` , client.user.avatarURL)
  .setThumbnail("")
  .setDescription('İnviteManager Yerine Bir Türk Bota Destek Olun !)
  .setTimestamp()
  .addField("Davet Linki.", `[Destek Sunucusu](https://discord.gg/jCyVavu)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=677909837220151309&scope=bot&permissions=2146958847')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};