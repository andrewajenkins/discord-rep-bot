const { clientId } = require('./../config.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        test()
        console.log(
            'new message in channel, user:',
            message.author.username,
            'message:',
            message.content
        )
        if (message.authorId === clientId || message.author.id === clientId)
            return
        if (
            message.content.startsWith('v!prep') ||
            message.content.startsWith('+vouch')
        ) {
            let messageArray = message.content.split(' ')
            console.log('messageArray:', JSON.stringify(messageArray))
            messageArray.shift()
            const targetUser = messageArray.shift()
            console.log('targetUser:', targetUser)
            const reason = messageArray.join(' ')
            const responseString =
                'leveling up the user: "' +
                targetUser +
                '" for "' +
                reason +
                '"'

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

            const myReply = await message.reply({
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

            // message.channel.send(responseString)
        }
    },
}

function test() {
    console.log('TESTED!!!')
}
