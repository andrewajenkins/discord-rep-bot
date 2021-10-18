import { Client, Collection, Intents } from 'discord.js'
import { interactionCreate, messageCreate, ready } from './events/index.js'
import { mrep, ping, prep, repCheck, test } from './commands/index.js'
import config from '../config.json'

export class MyClient {
    static client
    constructor() {
        MyClient.client = new Client({
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            ],
        })
        MyClient.client.commands = new Collection()

        // load events
        MyClient.client.once(ready.name, ready.execute)
        MyClient.client.on(interactionCreate.name, interactionCreate.execute)
        MyClient.client.on(messageCreate.name, messageCreate.execute)

        // load commands
        MyClient.client.commands.set(mrep.data.name, mrep)
        MyClient.client.commands.set(ping.data.name, ping)
        MyClient.client.commands.set(prep.data.name, prep)
        MyClient.client.commands.set(repCheck.data.name, repCheck)
        MyClient.client.commands.set(test.data.name, test)

        MyClient.client.on('warn', (info) => console.log(info))
        MyClient.client.on('error', console.error)

        MyClient.client.login(config.token)
    }
}
