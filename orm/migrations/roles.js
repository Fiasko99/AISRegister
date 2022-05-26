const { db } = require('../sequelize')

module.exports = async () => {
    const roles = [
        'teacher',
        'administrator'
    ]
    for (const role of roles) {
        await db.Roles.create({ name: role })
    }
};