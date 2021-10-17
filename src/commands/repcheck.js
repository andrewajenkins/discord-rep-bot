import { SlashCommandBuilder } from '@discordjs/builders'
import { MessageEmbed } from 'discord.js'

export let repCheck = {
    data: new SlashCommandBuilder()
        .setName('repcheck')
        .setDescription('Replies with reputation details for a user.')
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
                    .setName('review')
                    .setDescription('Leave a brief review of your interaction'),
            true
        ),
    async execute(interaction) {
        console.log('repcheck interaction:', interaction)

        const targetUser = interaction.options.getMember('user').user.username

        console.log(
            'repCheck for member',
            targetUser,
            'msg:',
            interaction.options.getString('input')
        )

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(targetUser + '#1234')
            .setDescription('Score & Information')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/820657616588898304/822787147928174652/imperius_by_emahrii_ddadoh1-fullview.png'
            )
            .addFields(
                { name: '+Rep', value: '2', inline: true },
                { name: '-Rep', value: '0', inline: true },
                { name: 'Score', value: '100%', inline: true }
            )
            .addFields(
                {
                    name: 'Most recent reputations.',
                    value: '12-10-2021 de <@103940885057646592>: :green_circle: : traded rush, quick and easy, ty.',
                },
                {
                    name: '\u200B',
                    value: '12-10-2021 de <@103940885057646592>: :green_circle: : traded rush, quick and easy, ty.',
                },
                {
                    name: '\u200B',
                    value: '12-10-2021 de <@103940885057646592>: :green_circle: : traded rush, quick and easy, ty.',
                }
            )

        const myReply = await interaction.reply({
            ephemeral: false,
            embeds: [embed],
            fetchReply: true,
        })

        myReply.react('🏠')
        myReply.react('⏪')
        myReply.react('◀')
        myReply.react('▶')
        myReply.react('⏩')
        myReply.react('↪')
    },
}
