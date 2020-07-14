const Discord = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.token)

bot.on('ready',()=> { 
    console.log('estou pronto para ser usado');
    bot.user.setActivity("batendo uma")
});

  
process.env.tokenclient.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
});
