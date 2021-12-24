const { Command } = require('discord-akairo');

class DrawCommand extends Command {
    constructor() {
        super('draw', {
           aliases: ['draw', 'dessin'],
           description: {
               content: 'La commande stars envoie une photo pour participer à l\'event draw',
               usage: 'draw',
               exemples: ['draw <image>']
            },
           category: 'Misc',
           args: [
             { id: 'photo', type: 'string', match: 'restContent' }
           ] 
        });
    }

    async exec(message, args) {   
      const stars = this.client.channels.cache.get('881958449477460048');
      if(!message.attachments.size) return message.channel.send("Impossible")
      if(message.attachments.size >= 2) return message.channel.send("Impossible")
      return stars.send({ embeds: [
        this.client.functions.embed() 
          .setTitle(`Dessin de ${message.author.username}`) 
          .setImage(message.attachments.first().url),
      ]});
    }
  }



module.exports = DrawCommand;