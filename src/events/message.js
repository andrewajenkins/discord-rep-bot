module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        console.log(
            'message intercepted, user:',
            message.author.username,
            'msg:',
            message.content
        )
    },
}
