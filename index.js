const discord = require('discord.js')
const bot = new Discord.Client()

//bot.on() permet de récupérer un événement.
// L'event "ready" réagis quand le bot est prêt.
//L'event "message" permet de récupérer un message qui à été envoyé.


bot.on('ready', () => {
console.log('Connecté!') // La console dira "Connecté comme vous l'avez vu!
})

bot.on('message', message =>{
if(message.content.startsWith('$ping')){
message.channel.send('pong!')
};

})
bot.login(process.env.Njg2MjE5Mzc2NjU0OTQyMjQ0.XmUCZw.RGE9iS18aU7RkfENl-JUZh7dsLA)
