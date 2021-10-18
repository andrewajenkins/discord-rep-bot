import { SlashCommandBuilder } from '@discordjs/builders'
// import { Client, Collection, Intents } from 'discord.js'
// import { interactionCreate } from '../events/index.js'

// import { ping } from '../commands/index.js'
// import config from '../../config.json'
import { MyClient } from '../my-client.js'

export let test = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies with test!')
        .addUserOption(
            (option1) =>
                option1
                    .setName('user')
                    .setDescription(
                        "The user whose reputation you'd like to modify"
                    ),
            true
        )
        .addStringOption(
            (option2) =>
                option2
                    .setName('message')
                    .setDescription('Leave a brief review of your interaction'),
            true
        ),
    async execute(interaction) {
        console.log('executing test command!', interaction)

        const client = MyClient.client

        await client.emit('interactionCreate', interaction)
    },
}
