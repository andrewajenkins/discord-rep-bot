import { MyClient } from '../my-client.js'

export let interactionCreate = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        // if (!interaction.isCommand()) return

        const client = MyClient.client

        if (interaction.commandName == 'test') {
            client.commands.get('ping').execute(interaction)
            client.commands.get('mrep').execute(interaction)
            return
        }

        const command = client.commands.get(interaction.commandName)

        if (!command) return

        // TODO auth checks

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            return interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            })
        }
    },
}
