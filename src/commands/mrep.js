const { SlashCommandBuilder } = require('@discordjs/builders')
const { Reps } = require('../schema')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mrep')
        .setDescription('Removes a repuation point from a user.')
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
        console.log('mrep interaction:', interaction)

        const targetUser = interaction.options.getMember('user').user.username
        const targetUserId = interaction.options.getMember('user').user.id
        const reviewMsg = interaction.options.getString('message')

        console.log('mrep for member', targetUser, 'msg:', reviewMsg)

        try {
            const tag = await Reps.create({
                type: 0,
                message: reviewMsg,
                timestamp: Date.now(),
                goal: 0,
                origin: interaction.user.id,
                username: targetUserId,
            })
            await interaction.reply({
                ephemeral: false,
                content:
                    'Reputation modification sucessfull. <@' +
                    interaction.user.id +
                    '> removed one point from <@' +
                    targetUserId +
                    '> for the reason: ' +
                    reviewMsg +
                    '. Reputation ID: uqWmK9j',
            })
        } catch (error) {
            console.log('Error in prep command!', error)
            return interaction.reply('Something went wrong with adding a tag.')
        }
    },
}
