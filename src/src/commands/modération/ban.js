const { Command } = require('discord-akairo');

class BanCommand extends Command {
    constructor() {
        super('ban', {
           aliases: ['ban'],
           category: 'Modération',
           description: {
            content: 'La commande ban permet de bannir un utilisateur !',
            usage: 'ban <member> <raison>',
            exemples: ['ban @TartosFrasies Pourquoi pas ?']
         },
           channel: 'guild',
           args: [
             { id: 'member', type: 'member' },
             { id: 'reason', type: 'string', match: 'restContent' },
           ],
           clientPermissions: ['BAN_MEMBERS'],
           userPermissions: ['BAN_MEMBERS']
        });
    }

    async exec(message, { member, reason }) {
      const logChannel = this.client.channels.cache.get('899342227514462260');
      if (!member.bannable) return message.channel.send("Impossible de bannir cet utilisateur !")
      if (reason) reason = "Raison non spévifiée !";
      member ? member.ban({ days: 7, reason: reason }) : message.channel.send("L'utilisateur n'existe pas !");
      const embed = this.client.functions.embed()
          .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
          .setDesciption("Ban !")
          .setTimestamp()
          .setColor('#daff00');

        await logChannel.send({ embeds: [embed] })
          .catch(() => console.log(`Problème en envoyant le message sur la commande ban !` ))

    }
}

module.exports = BanCommand;