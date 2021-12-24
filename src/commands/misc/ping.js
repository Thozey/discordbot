const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping'],
           cooldown: 10000,
           description: {
               content: 'La commande ping renvoie la latence du bot !',
               usage: 'ping',
               exemples: ['ping']
            },
           category: 'Misc' 
        });
    }

    async exec(message) {
        const sentMessage = await  message.channel.send("Pong !");
        const timeStamp = message.editTimestamp ? message.editTimestamp : message.createdTimestamp;
        const botLatency = `${'```'}\n ${Math.round(sentMessage.createdTimestamp - timeStamp)}ms ${'```'}`;
        const apiLatency = `${'```'}\n ${Math.round(message.client.ws.ping)}ms ${'```'}`;

        const embed = this.client.functions.embed()
          .setTitle('Pong ! 🏓')
          .addField('Latence du bot', botLatency, true)
          .addField('Latence de l\'API', apiLatency, true)
          .setFooter(message.author.username, message.author.displayAvatarURL())
          .setColor('#daff00')
          .setTimestamp();

        await sentMessage.edit({ 
            content: null,
          embeds: [embed]   
        }) 
    }
}

module.exports = PingCommand;