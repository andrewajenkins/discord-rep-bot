import sqlite3 from 'sqlite3'
// import { DAO } from '../dao.js'
import { open } from 'sqlite'

export let ready = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`)

        // const db = new DAO()

        const db = await open({
            filename: './tmp/database.db',
            driver: sqlite3.Database,
        })

        async function createTable(tableName, values) {
            await db.exec(`CREATE TABLE IF NOT EXISTS ${tableName} ${values}`)
        }

        sqlite3.verbose()

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
