const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        this.client.user.setPresence({ activities: [{ name: 'avec fraisou', type: 'PLAYING'}], status: 'dnd' });

        const nonBotUsers = this.client.users.cache.filter(user => !user.bot);
        const textchannel = this.client.channels.cache.filter(channel => channel.type == "GUILD_TEXT");

        console.log(`Prêt à servir ${this.client.guilds.cache.size} serveurs, ${nonBotUsers.size} utilisateurs et ${textchannel.size} salons textuels.`);
    }
}

module.exports = ReadyListener;