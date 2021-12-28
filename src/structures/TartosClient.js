require("dotenv").config();
const mongoose = require('mongoose');
const { embed } = require('../util/functions');
const { GuildsProvider } = require('../structures/Providers');
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

module.exports = class TartosClient extends AkairoClient {
  constructor(config = {}){
    super(
      { ownerID: '375235234322448385' },
      { 
        allowedMentions: {
          parse: ['roles', 'everyone', 'users'],
          repliedUser: false
        },
        partials: ["CHANNEL", 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
        presence: { 
          status: 'dnd',
          activities: [ 
            {
              name: 'avec Fraisou',
              type: 'PLAYING',
              url:  'https://www.youtube.com/c/getCodingKnowledge'
            }
            
          ]
        },
        intents: 32767
       }
    );

    this.commandHandler = new CommandHandler(this, { 
      allowMention: true,
      prefix: async message => {
        const guildPrefix = await this.guildSettings.get(message.guild);
        if(guildPrefix) return guildPrefix.prefix;
        return config.prefix;

      },
      
      defaultCooldown: 2000,
      directory: './src/commands/'
     });

     this.listenerHandler = new ListenerHandler(this, {
      directory: './src/listeners/'
     });

     this.functions = { embed: embed }
     this.guildSettings = new GuildsProvider();
  }

    async init() {
     this.commandHandler.useListenerHandler(this.listenerHandler);
     this.listenerHandler.setEmitters({ commandHandler: this.commandHandler });
     await this.commandHandler.loadAll();
     console.log(`Commandes -> ${this.commandHandler.modules.size}`)
     await this.listenerHandler.loadAll();
     console.log(`Listeners -> ${this.listenerHandler.modules.size}`)
  }

  async start(){
    try {
      await mongoose.connect(process.env.MONGOSTRING, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
      });
      console.log("DB connectée !")
    } catch(e) {
      console.log("DB pas connectée ! Voir l'erreur cu-dessous !\n\n", e)
      return process.exit();
    }
    await this.init();
    return this.login(process.env.TOKEN);
  }
}