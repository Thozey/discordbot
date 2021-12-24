const TartosClient = require('./structures/TartosClient');

let client = new TartosClient({ prefix: '~' });

client.start(process.env.TOKEN);

setInterval(() => {
  console.log("salut")
  }, 300000)