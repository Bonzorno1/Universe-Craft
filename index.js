const { Client, Event, GatewayIntentBits, Integration, InteractionCollector } = require('discord.js');
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Bot Online');
});

client.on('interactionCreate', async (Interation) => {
    if (!Interation.isCommand()) return;

    const { commandName } = Interation;

    if (commandName == 'ping') {
        await Interaction.reply('Pong!');
    }else if (commandName === 'server') {
        await Interaction.reply('Informazioni sul server! ');
    }else (commandName === 'user'); {
        await Interaction.reply('Informazioni sull\'utente!');
       }

client.login(process.env.token);






