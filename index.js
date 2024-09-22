const { Client, Partials } = require("discord.js");

const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [],
  partials: [User, Message, GuildMember, ThreadMember]
});

client.config = require("./config.json");

client.on("ready", () => { 
  console.log("el bot se inicio correctamente");
});
 
client.login(client.config.token);
