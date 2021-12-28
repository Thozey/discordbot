const { Command } = require('discord-akairo');

class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo', 'info'],
           description: 'Affiche les informations de l\'utilisateur',
           ignoreCooldown: '375235234322448385',
           ignorePermissions: '375235234322448385',
           ratelimit: 2,
           cooldown: 5000,
           typing: true,
           channel: 'guild',
           category: 'Misc',
           description: {
            content: 'La commande userinfo renvoie des infos sur l\'utilisateur !',
            usage: 'userinfo <member>',
            exemples: ['userinfo']
         },
           args: [
             { id: 'member', type: 'member', default: message => message.member },
           ]
        });
    }

    exec(message, { member }) {
      return message.channel.send({ embeds: [
        this.client.functions.embed() 
          .setTitle(`${member.displayName} (${member.id})`) 
          .setThumbnail(member.user.displayAvatarURL())
          .setDescription(`Son compte a été créé le ${member.user.createdAt}`)
      ]});
    }
}

module.exports = UserInfoCommand;