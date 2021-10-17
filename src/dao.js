export class DAO {
    db

    constructor() {
        this.db = await open({
            filename: '/tmp/database.db',
            driver: sqlite3.Database,
        })
    }

    createTable = async function (tableName, values) {
        await db.exec(`CREATE TABLE IF NOT EXISTS ${tableName} ${values}`)
    }
}
