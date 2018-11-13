const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTEyMDA0MzIxMTMxNDk1NDM1.DszZSw.84OXiEU_y0u5eu4mZZKQtGOl7GQ');