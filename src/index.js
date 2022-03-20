require("dotenv").config();
const TartosClient = require('./structures/TartosClient');

let client = new TartosClient({ prefix: '~' });

client.start(process.env.TOKEN);

setInterval(() => {
  console.log("salut")
  }, 300000)

  client.on(`messageCreate`, async message => {
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
          if (message.author.id === "375235234322448385") return;
          if (message.author.id === "819778342818414632") return;
          if (message.author.id === "778557585552310293") return;
          if (message.member.roles.cache.has(`881580122514264064`)) return;
            await message.delete();
            await message.channel.send(`**Tu n'as pas la permission de faire cela !**`);
        }
    } catch (e) {
        console.log(e);
    } })
