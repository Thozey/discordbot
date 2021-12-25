const { Command } = require('discord-akairo');

class EmbedsCommand extends Command {
    constructor() {
        super('embeds', {
           aliases: ['embeds'],
           description: {
               content: 'La commande embeds envoie un msg pour participer à l\'event stars',
               usage: 'embeds',
               exemples: ['embeds texte']
            },
           category: 'Misc',
           args: [
             { id: 'msg', type: 'string', match: 'restContent' }
           ] 
        });
    }

    async exec(message, args) {   
      const stars = this.client.channels.cache.get('902524527823716362');
      return stars.send({ embeds: [
        this.client.functions.embed() 
          .setTitle(`Accès serveur`) 
          .setDescription(args.msg)
      ]});
    }
}

module.exports = EmbedsCommand;