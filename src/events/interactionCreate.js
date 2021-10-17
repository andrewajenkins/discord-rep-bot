const myClient = require('../index')

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        const myClient = require('../index')
        console.log('client:', JSON.stringify(myClient.client))
        if (!interaction.isCommand()) return

        const command = myClient.client.commands.get(interaction.commandName)

        if (!command) return

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
