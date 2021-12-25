const TartosClient = require('./structures/TartosClient');
const { TOKEN } = require('./util/config')

let client = new TartosClient({ prefix: '~' });

client.start(TOKEN);

setInterval(() => {
  console.log("salut")
  }, 300000)