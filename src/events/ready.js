const { sequelize } = require('../schema')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`)
        sequelize.sync()
    },
}
