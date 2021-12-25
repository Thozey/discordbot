const { Command } = require('discord-akairo');

class SayCommand extends Command {
    constructor() {
        super('say', {
           aliases: ['say'],
           description: {
               content: 'La commande say envoie un msg pour parler à ta place !',
               usage: 'say',
               exemples: ['say texte']
            },
           category: 'Misc',
           args: [
             { id: 'msg', type: 'string', match: 'restContent' }
           ] 
        });
    }

    async exec(message, args) {  
      const log = this.client.channels.cache.get('899342227514462260');
      if (message.author.bot) return;
      message.channel.send(args.msg)
      message.delete();
      log.send(`${message.author.username} vient d'utiliser la commande say`)

    }
}

module.exports = SayCommand;