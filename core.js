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
        "Sarah" : "Baba ovo do onurB",
        "Eduardo" : "Deve estar atras de alguem com sarda.",
        "Lucas gado" : "Ta locão, ta afim de tomar uma minimonocelha.",
        "Rafael" : "Cd ele, não to vendo ele é muito pequeno.",
        "Tadeu" : "Nada contra mas prefiro distancia.",
        "Bruno" : "",
        "Gusta" : "Falo nada so sei que gosta de umas paradas ai nada haver com nada",
        "Me da um pedacinho" : "Peda para aprofessora de Etica igual aou Pedrão kkkk.",
        "Jaca" : "Sonhando com o pc novo.",
        "Lucas":"Provavelmente com a namorada ou estudando ingles ou programação.",
        "F":"F.",
        "Pedrão": "Deve ta vendendo algo no mercado livre ou trocando.", 
        "Suyuck": "Falando com o mais pro de todos Lucas ou no banho de mil anos ",
        "Suy": "Falando com o mais pro de todos Lucas ou no banho de mil anos ",
        "Suco": "Falando com o mais pro de todos Lucas ou no banho de mil anos ",
        "Matheus": "Ja é de casa mais nos fingi que ele não é",
    };   
if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
})

bot.on("message", (msg) =>   {
    if(!msg.author.bot){
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](bot,msg);
    }})
    bot.on("guildMemberAdd", member => {
        member.guild.channels.get('740718226639421491').send (member.user.username + ' Bem vindo ao melhor serve de todos:)')
    });
        bot.on("guildMemberRemove", member => {
            member.guild.channels.get('740718314711679026').send(member.user.username + ' Adeus :cold_sweat: ')
    })


bot.login(process.env.token);