const { Listener } = require('discord-akairo');

class CooldownListener extends Listener {
    constructor() {
        super('cooldown', {
            emitter: 'commandHandler',
            event: 'cooldown'
        });
    }

    async exec(message, command, remaining) {
      message.reply(`Il vous reste \`${Math.round(remaining / 1000)}\` secondes avant de pouvoir taper la commande **${command.id}**`);
    
    }
}

module.exports = CooldownListener;