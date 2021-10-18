import { SlashCommandBuilder } from '@discordjs/builders'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export let mrep = {
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
        try {
            console.log('mrep interaction:', interaction)

            const targetUser =
                interaction.options.getMember('user').user.username
            const targetUserId = interaction.options.getMember('user').user.id
            const reviewMsg = interaction.options.getString('message')

            console.log('mrep for member', targetUser, 'msg:', reviewMsg)

            const db = await open({
                filename: './tmp/database.db',
                driver: sqlite3.Database,
            })

            function makeId(length) {
                var result = ''
                var characters =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                var charactersLength = characters.length
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(
                        Math.floor(Math.random() * charactersLength)
                    )
                }
                return result
            }

            const result = await db.get(
                'INSERT INTO reputations VALUES ($id,$type,$message,$timestamp,$goal,$origin)',
                {
                    $id: makeId(7),
                    $type: 0,
                    $message: reviewMsg,
                    $timestamp: Date.now(),
                    $goal: Number(targetUserId),
                    $origin: Number(interaction.user.id),
                }
            )
            // "INSERT INTO reputations VALUES(?,?,?,?,?,?)",
            //                      [id, 0, reason, int(time.time()), associated_user.id, ctx.message.author.id]
            const response = {
                ephemeral: false,
                content:
                    'Reputation modification sucessfull. <@' +
                    interaction.user.id +
                    '> removed one point from <@' +
                    targetUserId +
                    '> for the reason: ' +
                    reviewMsg +
                    '. Reputation ID: uqWmK9j',
            }
            if (interaction.commandName == 'test') {
                interaction.followUp(response)
                return
            }
            await interaction.reply(response)
        } catch (error) {
            console.log('Error in mrep command!', error)
            return interaction.followUp(
                'Something went wrong with mrep command.'
            )
        }
    },
}
