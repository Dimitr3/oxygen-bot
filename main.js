const Discord = require('discord.js');
const myBot = new Discord.Client();
prefix = '!',
con = console.log,

//jeux du bot //

myBot.on('ready', () => {
myBot.user.setActivity(`!aide | Oxygen bot coder par Dimiitry |`, { type: 'STREAMING', url: 'https://www.twitch.tv/lagrandmamangamer' })
});

//mp//

myBot.on('message', msg => {

  if (msg.content.startsWith(prefix + 'mp')) {
     if (msg.member.id === '302848594539708417') {

             let messagesended = 0;

         let args = msg.content.split(" ").slice(1).join(" ")
         console.log("En cours");
         msg.guild.members.forEach(member => {

             member.send(`${args}`)
                 .catch(() => con("Failed to send message to " + member.user.tag));

             messagesended++;

             console.log(`Message envoyé a ${member.user.tag}`);

         });


         con(`J'ai envoyé ${messagesended} MP !`);



     } else {
       }
}
});

//role//

myBot.on('message', msg => {
    if(msg.content[0] === prefix) {
        if(msg.content === prefix + 'meuf') {
            let role = msg.guild.roles.find('name', '「👧」Meuf')
            if(msg.member.roles.find('name', '「👧」Meuf')) {
                msg.member.removeRole(role)
                msg.reply(`Voila tu n'as plus ton grade`)
            }
            else {
                msg.member.addRole(role)
                msg.reply('Voila tu as ton role')
            }
        }
    }
});
    
myBot.on('message', msg => {
    if(msg.content[0] === prefix) {
        if(msg.content === prefix + 'mec') {
            let role = msg.guild.roles.find('name', '「👦」Mec')
            if(msg.member.roles.find('name', '「👦」Mec')) {
                msg.member.removeRole(role)
                msg.reply(`Voila tu n'as plus ton grade`)
            }
            else {
                msg.member.addRole(role)
                msg.reply('Voila tu as ton role')
            }
        }
    }
});

//message//

myBot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === "!aide") {
            message.reply(`
Pour voir combien tu as d'invité il te suffit de faire $invite. 
Pour le bot de musique c'est .p + le lien ou titre de la musique. 
Si tu veux avoir le role de Meuf ou de Mec il te suffit de faire !meuf ou !mec suivant ton choix. 
Pour les recrutements il y a une commande !oxygen
Pour savoir ce que vous pouvez reçevoir faite !jeux.`)
        }
                
    }
}); 

myBot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === "!oxygen") {
            message.reply(`Pour être recruté il faut aller voir un membre du staff (admin+,Recruteur,Responsable staff).`)
        }
    }
})

//token//

myBot.login('NTU1MTE4OTcxMDQxNjExNzc3.D2micw.v-2vACX099zBwdnOCo869FFuKyY');
