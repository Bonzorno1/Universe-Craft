const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { token, clientId, guildId } = require('./config.json');

const comandi = [
    new SlashCommandBuilder().setName('ping').setDescription('Risponde con pong!'),
    new SlashCommandBuilder().setName('ip').setDescription('Visualizza l ip del server'),
    new SlashCommandBuilder().setName('user').setDescription('Visualizza le info sull\'utente')
].map(comandi => comandi.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: comandi })
    .then(() => console.log('Comandi registrati con sucesso!'))
    .catch(console.error);