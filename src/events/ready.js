// const { sequelize } = require('../schema')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`)
        // sequelize.sync()

        sqlite3.verbose()

        async function createTable(tableName, values) {
            await db.exec(`CREATE TABLE IF NOT EXISTS ${tableName} ${values}`)
        }

        await createTable(
            'reputations',
            '(id text, type integer, message text, timestamp integer, goal integer, origin integer)'
        )
        await createTable(
            'today',
            '(user integer, goal integer, timestamp integer)'
        )
        await createTable('locked', '(user integer, timestamp integer)')
        await createTable(
            'paginator',
            '(page integer, pageNB integer, messageId integer, embeds blob)'
        )
        await createTable('cmdlist', '(channelId integer)')
        await createTable('loglist', '(channelId integer, category integer)')
        await createTable('roleLevel', '(roleId integer, level integer)')
        await createTable('pointRole', '(roleId integer, point integer)')
        await createTable('lockedRoles', '(roleId integer)')
    },
}
