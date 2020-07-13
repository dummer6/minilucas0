const Discord = require('discord.js')
const bot = new Discord.Client();
bot.login(process.env.token)

bot.on('ready',()=> { 
    console.log('estou pronto para ser usado');
    bot.user.setActivity("batendo uma")
});




{
bot.on('message', msg =>{
    if (msg.author.bot){
        return;}   
    });

bot.on('message', msg =>{
    if (msg.content === 'Sarah'){
msg.reply('Cd ela s2??')}
})

bot.on('message', msg =>{
    if (msg.content === 'Tadeu'){
msg.reply('Nada contra mas prefiro distanci ;-;')}
})

bot.on('message', msg =>{
    if (msg.content === 'Bruno'){
msg.reply('Aquele talarico de merda')}
})

bot.on('message', msg =>{
    if (msg.content === 'Rafael'){
msg.reply('Cade ele, não to vendo ele é mt pequeno')}
})

bot.on('message', msg =>{
    if (msg.content === 'Lucas gado'){
msg.reply('Tá loco quer tomar uma minimonocelha ?')}
})

bot.on('message', msg =>{
    if (msg.content === 'Gustavo'){
msg.reply('Não entendo nada que ele fala, pq ele não sabe escrever')}
})

bot.on('message', msg =>{
    if (msg.content === 'João'){
msg.reply('Muito umilde mas que todo mundo aq')}
})


bot.on('message', msg =>{
    if (msg.content === 'Eduardo'){
msg.reply('Deve estar atrás da Yasmim')}
})


bot.on('message', msg =>{
    if (msg.content === 'Me da um pedacinho'){
msg.reply('Pede para a prof  de etica iqual ao Pedrão ksksk')}
})
}