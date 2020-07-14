const Discord = require("discord.js");
const bot  = new Discord.Client();
bot.login(process.env.token);
const prefix   = ";";
const commands = require("./scripts/commandsReader")(prefix);

bot.on("ready",()=>{
    console.log(`Batendo uma`);
});

bot.on("message",(msg)=>{
    if(!msg.author.bot){
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](bot,msg);
    }
});

{ bot.on("message", async message => {
 
    if (message.content.startsWith('Sarah')){
            message.channel.send("Cade ela S2??")}

    if (message.content.startsWith('Eduardo')){
            message.channel.send("Deve estar atras da Yasmim")}
    
    if (message.content.startsWith('Bruno')){
            message.channel.send("É um talarico de merda")}

    if (message.content.startsWith('Tadeu')){
            message.channel.send("Nada contra mas prefiro distancia ;-;")}
    
    if (message.content.startsWith('João')){
            message.channel.send("Muito umilde mas que todo mundo aqui")}
    
    if (message.content.startsWith('Lucas gado')){
            message.channel.send("Tá loco quer um minimonocelha")}

    if (message.content.startsWith('Me da um pedaço')){
            message.channel.send("Pede para a professora de etica igual ao Pedrão kkkk")}
   
    if (message.content.startsWith('Rafael')){
           message.channel.send("Cade ele?? Não to vendo ele é muito pequeno ")}
     
   if (message.content.startsWith('Gustavo')){
            message.channel.send("Não entendo nada que ele manda porque ele é adalfabeto")}
})}

