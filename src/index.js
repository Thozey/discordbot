require("dotenv").config();
const TartosClient = require('./structures/TartosClient');

let client = new TartosClient({ prefix: '~' });

client.start(process.env.TOKEN);

setInterval(() => {
  console.log("salut")
  }, 300000)
  
setInterval(() => {
const salon = client.channels.cache.get("881587222829211658") 
  salon.send("Voter pour le serveur est important !\n Vas dans le salon <#935234685766864926>, puis dans messages épinglés, et clique sur le lien pour voter ! ")
  }, 7200000)


  client.on(`messageCreate`, async message => {
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
          if (message.author.id === "375235234322448385") return;
          if (message.member.roles.cache.has(`881580122514264064`)) return;
            await message.delete();
            await message.channel.send(`**Tu n'as pas la permission de faire cela !**`);
        }
    } catch (e) {
        console.log(e);
    } })