const { Command } = require('discord-akairo');

class KickCommand extends Command {
    constructor() {
        super('kick', {
           aliases: ['kick'],
           category: 'Modération',
           description: {
            content: 'La commande kick permet d\'expulser un utilisateur !',
            usage: 'kick <member> <raison>',
            exemples: ['kick @TartosFrasies Pourquoi pas ?']
         },
           channel: 'guild',
           args: [
             { id: 'member', type: 'member' },
             { id: 'reason', type: 'string', match: 'restContent' },
           ],
           clientPermissions: ['KICK_MEMBERS'],
           userPermissions: ['KICK_MEMBERS']
        });
    }

    async exec(message, { member, reason }) {
      const logChannel = this.client.channels.cache.get('899342227514462260');
      if (!member.kickable ) return message.channel.send("Impossible de kick cet utilisateur !")
      if (!reason) reason = "Raison non spévifiée !";
      member ? member.kick(reason) : message.channel.send("L'utilisateur n'existe pas !");
      const embed = this.client.functions.embed()
          .setAuthor(`${member.user.username}`, member.user.displayAvatarURL())
          .setDescription("Kick !")
          .setTimestamp()
          .setColor('#daff00');

        await logChannel.send({ embeds: [embed] })
          .catch(() => console.log(`Problème en envoyant le message sur la commande kick !` ))

    }
}

module.exports = KickCommand;