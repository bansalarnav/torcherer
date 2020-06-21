const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '*';
const PING = '@';

var started = false;

client.on('ready', () => {
    console.log('Bot is online !!')
})

client.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    var name = message.content[0];
    //console.log(name);
    done = false;
if(message.content != null && started == true){
if (!message.member.roles.cache.find(r => r.name === 'Torcherer')){
         if(message.content.toLowerCase() === 'hello'){
        message.channel.send('**Bye!**');
        }
        else if(message.content === '*stop'){

        } else if(message.content.toLowerCase() === 'hi'){
                 message.channel.send('**Bye!**');
                 }
   else if(message.content.toLowerCase() === 'stahp'){
         message.channel.send('**Not at all**');
                                  }
         else if(message.content.toLowerCase() === 'bye'){
            message.channel.send('**Hi!**');
              }
          else if(message.content.toLowerCase() === 'yes'){
                 message.channel.send('**No!**');
                 }
           else if(message.content.toLowerCase() === 'no'){
                  message.channel.send('**Yes!**');
                  }
           else if(message.content.toLowerCase() === 'stop'){
                  message.channel.send('**Not at all!**');
                  }
            else if(message.content.toLowerCase() === 'lol'){
                   message.channel.send('**Lol So Funny**');
                   }
            else if(message.content.toLowerCase() === 'oof'){
                   message.channel.send('**Oof that must have hurt**');
                   }
            else if(name.toLowerCase() === 'f'){
                   message.channel.send('**Mind your language boi!**');
                   }
            else if(message.content.toLowerCase() === 'fuck'){
                   message.channel.send('**Mind your language boi!**');
                   }
 else if(message.content.toLowerCase() === 'lmao'){
        message.channel.send('**Haha ! My stomach hurts**');
        }
         else if(message.content.toLowerCase() === 'nah'){
                message.channel.send('**Yes!**');
                }
          else if(name ==='<'){
                          message.channel.send('**Stop pinging ma Boi!**');
                          }
          else if(message.content.toLowerCase() === '@Aahan'){
                          message.channel.send('**Stop pinging ma Boi!**');
                          }
           else if(message.content.toLowerCase() === '@Parth'){
                                    message.channel.send('**Stop pinging ma Boi!**');
                                    }
        else{
        return message.channel.send(message.content)
        }
        }
    }
    switch(args[0]){
    case 'start':
    if (!message.member.roles.cache.find(r => r.name === 'ADMIN'))return message.channel.send('you cant start a torcher')
        message.channel.send('**Starting the torcher** :smiley: ');
        started = true;
        break;
    case 'stop':
     if (message.member.roles.cache.find(r => r.name === 'ADMIN')){
        message.channel.send('**Stopping torcher** :frowning: ');
        started = false;}
        else{return message.channel.send('You cant stop the torcher')}
        break;
    }
})


client.login('NzIzNzU3OTY4MjI2Nzc5MjE3.Xu2SNA.ArqDQD4_ygwPoTtRAsEyeVkX0V0');