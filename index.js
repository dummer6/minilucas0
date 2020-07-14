const Discord = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.token)

bot.on('ready',()=> { 
    console.log('estou pronto para ser usado');
    bot.user.setActivity("batendo uma")
});

  
   
bot.on('message', message => {
    let responseObject = {
        "Sarah" : "Cade ela S2",
        "Eduardo" : "Deve estar atras da Yasmim",
        "Lucas gado" : "Ta locão, ta afim de tomar uma minimonocelha",
        "Rafael" : "Cd ele, não to vendo ele é muito pequeno",
        "Tadeu" : "Nada contra mas prefiro distancia",
        "Bruno" : "Aquele talarico de merda ?",
        "Gustavo" : "Eu não entendo nada que ele digita porque ele é adalfabeto",
        "Me da um pedacinho" : "Peda para aprofessora de Etica igual aou Pedrão kkkk",
        "João" : "Cara muito umilde e top"
    };
})

