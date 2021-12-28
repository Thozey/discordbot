const { Command } = require('discord-akairo');

class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
           aliases: ['prefix'],
           category: 'Misc',
           ownerOnly: true,
           description: {
            content: 'La commande prefix modifie le prefix du serveur !',
            usage: 'prefix <NewPrefix>',
            exemples: ['prefix']
         },
          channel: 'guild',
           args: [
             { id: 'newPrefix', type: 'string' }]
        });
    }

    async exec(message, args) {
      if (!args.newPrefix) return message.channel.send(`Prefix actuel -> ${await this.handler.prefix(message)}`);
      await this.client.guildSettings.update(message.guild, { prefix: args.newPrefix });
      return message.channel.send(`Le prefix du serveur est maintenant -> \`${args.newPrefix}\``);
    }
}

module.exports = PrefixCommand;