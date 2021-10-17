import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { mrep, ping, prep, repCheck } from './commands/index.js'
import config from '../config.json'

const commands = []
commands.push(mrep.data)
commands.push(ping.data)
commands.push(prep.data)
commands.push(repCheck.data)

const rest = new REST({ version: '9' }).setToken(config.token)

rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), {
    body: commands,
})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
