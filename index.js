const Discord = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.token)

bot.on('ready',()=> { 
    console.log('estou pronto para ser usado');
    bot.user.setActivity("batendo uma")
});

  


bot.on('message', message => {
if (message.content.startsWith("!roleta")){
    randomNumber = Math.floor(Math.random() * (2 - 1) + 1);
if(randomNumber == 1){
    message.reply("Se fudeu:(" )
} 

else{
    message.reply("Se deu bem ;)" );
}
}})