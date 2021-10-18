// import { Client, Collection, Intents } from 'discord.js'
// import { interactionCreate, messageCreate, ready } from './events/index.js'
// import { mrep, ping, prep, repCheck, test } from './commands/index.js'
// import config from '../config.json'

import { MyClient } from './my-client.js'

// create client
// export const client = new Client({
//     intents: [
//         Intents.FLAGS.GUILDS,
//         Intents.FLAGS.GUILD_MESSAGES,
//         Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
//     ],
// })
// client.commands = new Collection()

// // load events
// client.once(ready.name, ready.execute)
// client.on(interactionCreate.name, interactionCreate.execute)
// client.on(messageCreate.name, messageCreate.execute)

// // load commands
// client.commands.set(mrep.data.name, mrep)
// client.commands.set(ping.data.name, ping)
// client.commands.set(prep.data.name, prep)
// client.commands.set(repCheck.data.name, repCheck)
// client.commands.set(test.data.name, test)

// client.on('warn', (info) => console.log(info))
// client.on('error', console.error)

// client.login(config.token)
// client.emit('interactionCreate', 'test')

new MyClient()
