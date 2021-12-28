const { Command } = require('discord-akairo');

class ClearCommand extends Command {
  constructor() {
    super('clear', {
      aliases: ['clear'],
      clientPermissions: ['BAN_MEMBERS'],
      userPermissions: ['BAN_MEMBERS'],
      description: {
        content: 'La commande clear supprime les messages d\'un utilisateur !',
        usage: 'clear',
        exemples: ['clear 10']
      },
      category: 'Modération',
      args: [
        { id: 'msg', type: 'string', match: 'restContent' }
      ]
    });
  }
  exec(message) {
    let msg = message.content.split(' ');
    let number = parseInt(msg[1]);
    if (msg.length === 1) {
      return message.reply('***Veuillez entrer le nombre de messages à supprimer !***')
    } else if (isNaN(msg[1])) {
      return message.reply(`***${msg[1]} n'est pas un nombre !***`)
    } else if (number > 99) {
      return message.reply(`Il faut spécifier un **nombre** entre 1 et 100 !`)
    } else if (number.deletable == true) {
      message.channel.bulkDelete(number).then(message.channel.send(`***__${msg[1]}__ messages ont été supprimé !***`))
    } else {
      message.reply('Un/des messages sont trop vieux et ne peuvent être supprimés.')
    }
  }
}


module.exports = ClearCommand;