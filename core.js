const Discord = require("discord.js");
const bot  = new Discord.Client();
const prefix   = ";";
const commands = require("./scripts/commandsReader")(prefix);

bot.on("ready",()=>{
    console.log(`Pronto para ser usado`);
    bot.user.setActivity("E batendo uma")
});

bot.on("message", message => {
    let responseObject = {
        "Sarah" : "Queima no fogo do inferno nunca mais quero ver",
        "Eduardo" : "Deve estar atras da Yasmim",
        "Lucas gado" : "Ta locão, ta afim de tomar uma minimonocelha",
        "Rafael" : "Cd ele, não to vendo ele é muito pequeno",
        "Tadeu" : "Nada contra mas prefiro distancia",
        "Bruno" : "Aquele talarico de merda ?",
        "Gustavo" : "Eu não entendo nada que ele digita porque ele é adalfabeto",
        "Me da um pedacinho" : "Peda para aprofessora de Etica igual aou Pedrão kkkk",
        "João" : "Cara muito umilde e top",
        "Lucas":"Ta procurando algem para namorar com ele aquele gado",
        "Giovannie" : "Largo nois, vou nem falar sobre ele"
    };   
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
})

bot.on("message",(msg)=>{
    if(!msg.author.bot){
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](bot,msg);
    }
});

bot.login(process.env.token);