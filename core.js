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
        "Sarah" : "Ela ta nos crazy agora, mas nunca concordei.",
        "Eduardo" : "Deve estar atras da Yasmim.",
        "Lucas gado" : "Ta locão, ta afim de tomar uma minimonocelha.",
        "Rafael" : "Cd ele, não to vendo ele é muito pequeno.",
        "Tadeu" : "Nada contra mas prefiro distancia.",
        "Bruno" : "Provavelmente começou a destreuição esse fdp",
        "Gustavo" : "Mt ridiculo e infantil.",
        "Me da um pedacinho" : "Peda para aprofessora de Etica igual aou Pedrão kkkk.",
        "João" : "Tento destruir o serve traidor.",
        "Lucas":"F.",
        "Giovannie" : "Largo nois, vou nem falar sobre ele.",
        "F":"F."
        
    };   
if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
})

bot.on("message",(msg) =>   {
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