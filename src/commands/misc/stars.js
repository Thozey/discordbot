const { Command } = require('discord-akairo');

class StarsCommand extends Command {
    constructor() {
        super('stars', {
           aliases: ['stars'],
           cooldown: 86400000,
           description: {
               content: 'La commande stars envoie une photo pour participer à l\'event stars',
               usage: 'stars',
               exemples: ['stars <image>']
            },
           category: 'Misc',
           args: [
             { id: 'photo', type: 'string', match: 'restContent' }
           ] 
        });
    }

    async exec(message, args) {   
      const stars = this.client.channels.cache.get('881596889462632448');
      if(!message.attachments.size) return message.channel.send("Impossible")
      if(message.attachments.size >= 2) return message.channel.send("Impossible")
      stars.send({ embeds: [ 
        this.client.functions.embed() 
          .setTitle(`Selfie de ${message.author.username}`) 
          .setImage(message.attachments.first().url),
      ]})
      .then(async msg => {  
      msg.react('925418612435607654');
    });
  }
}

module.exports = StarsCommand;