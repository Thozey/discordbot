const { Listener } = require('discord-akairo');
const { Message, MessageEmbed } = require('discord.js');

class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }
    async exec(member) {
        const logChannel = this.client.channels.cache.get('899342227514462260');
        const bvn = this.client.channels.cache.get('881587222829211658');

        const embed = this.client.functions.embed()
          .setDescription(`**${member.user.tag}** a rejoint le serveur !`)
          .setFooter(`Membres: ${member.guild.memberCount.toLocaleString()}`)
          .setColor('#daff00')

        await logChannel.send({ embeds: [embed] })
          .then(() => console.log(`guildMemberAdd -> Message envoyé pour ${member.user.tag}.` ))
          .catch(() => console.log(`guildMemberAdd -> Le message n'a pas été envoyé pour ${member.user.tag}.` ))

        bvn.send(`**꧁ Bienvenue à <@${member.id}> qui vient de rejoindre le serveur ! ꧂**`)
    }
}

module.exports = GuildMemberAddListener;