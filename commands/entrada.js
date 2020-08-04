const Discord = require("discord.js");
const bot  = new Discord.Client();

bot.on("message",(msg) =>   {
    if(!msg.author.bot){
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](bot,msg);
    }
bot.on("guildMemberAdd", member => {
member.guild.channels.get('730914946522546249').send(member.user.username + 'Bem vindo ao inferno :)')

})
})
