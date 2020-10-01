const Discord = require('discord.js');

const Client = new Discord.Client();

const prefix = '!archie ';

Client.once('ready', () => {
    console.log("Archie Bot Online")
})

Client.on('message', message => {
     if (message.channel.type == 'dm'){
        
        Client.channels.cache.get('761171304228323348').send(message).catch(err => console.log(err));

        message.author.send("Your message has been sent to anon-chat").catch(err => console.log(err));
     }
     if(!message.content.startsWith(prefix) || message.author.bot) return ;

     const args = message.content.slice(prefix.length).split(/ +/);

     const command = args.shift().toLowerCase();

     if (command === 'ping'){
        message.channel.send("pong");
     }else if(command === 'fact'){
        message.channel.send("command in development")
     }
     else if (command === 'version'){
        message.channel.send("Current Archie Bot Version: Alpha v0.0.1")
     }
     else{
        message.channel.send("Sorry i didn't understand your instruction");
     }
})



Client.login('NzYxMTQwMDI0Mzg0MTU5NzU2.X3WQ4w.7hhPRQ7dH1OAPczeAehccW4fsNk')