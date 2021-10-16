const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: './tmp/database.db',
})

exports.Reps = sequelize.define('reputations', {
    id: {
        type: Sequelize.TEXT,
        primaryKey: true,
        unique: true,
    },
    type: Sequelize.INTEGER,
    message: Sequelize.TEXT,
    timestamp: Sequelize.INTEGER,
    goal: Sequelize.INTEGER,
    origin: Sequelize.INTEGER,
    username: Sequelize.STRING,
})

exports.Today = sequelize.define('today', {
    user: Sequelize.INTEGER,
    goal: Sequelize.INTEGER,
    timestamp: Sequelize.INTEGER,
})

exports.Locked = sequelize.define('locked', {
    user: Sequelize.INTEGER,
    timestamp: Sequelize.INTEGER,
})

exports.Paginator = sequelize.define('paginator', {
    page: Sequelize.INTEGER,
    pageNB: Sequelize.INTEGER,
    messageId: Sequelize.INTEGER,
    embeds: Sequelize.BLOB,
})

exports.CmdList = sequelize.define('cmdList', {
    channelId: Sequelize.INTEGER,
})

exports.LogList = sequelize.define('logList', {
    channelId: Sequelize.INTEGER,
    category: Sequelize.INTEGER,
})

exports.RoleLevel = sequelize.define('roleLevel', {
    roleId: Sequelize.INTEGER,
    level: Sequelize.INTEGER,
})

exports.PointRole = sequelize.define('pointRole', {
    roleId: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
})

exports.LockRoles = sequelize.define('lockRoles', {
    roleId: Sequelize.INTEGER,
    point: Sequelize.INTEGER,
})

exports.sequelize = sequelize
