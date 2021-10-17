import { SlashCommandBuilder } from '@discordjs/builders'

export let ping = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        console.log('executing ping command!')

        await interaction.reply('Pongs!')
    },
}
