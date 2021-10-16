const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mrep')
        .setDescription('Removes a repuation point from the user.')
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
        console.log('prep interaction:', interaction)

        const targetUser = interaction.options.getMember('user').user.username
        const targetUserId = interaction.options.getMember('user').user.id
        const reviewMsg = interaction.options.getString('message')

        console.log('prep for member', targetUser, 'msg:', reviewMsg)

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
    },
}
