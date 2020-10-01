const Discord = require('discord.js');

const Client = new Discord.Client();

const prefix = '!archie ';

const fs = require('fs')

Client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync(`./commands/`);

for(const file of commandfiles){
   var command = require(`./commands/${file}`);
   console.log(`Loading the following command: ${command.name}`)
   Client.commands.set(command.name, command)
}

Client.once('ready', () => {
   console.log("Archie Bot is now ready")
})

Client.on('message', message => {
     if(!message.content.startsWith(prefix) || message.author.bot){

      if (message.channel.type == 'dm'){
        
         Client.channels.cache.get('761171304228323348').send(message).catch(err => console.log(err));
 
         message.author.send("Your message has been sent to anon-chat").catch(err => console.log(err));
      }

     }else{
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

         if (command === 'ping'){
            Client.commands.get('ping').execute(message, args)
         }else if(command === 'fact'){
            message.channel.send("command in development")
         }
         else if (command === 'version'){
            message.channel.send("Current Archie Bot Version: Alpha v0.0.1")
         }
         else{
            message.channel.send("Invalid Command!!!");
         }
      }
})



Client.login()