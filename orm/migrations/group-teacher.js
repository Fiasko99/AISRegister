const { db } = require('../sequelize')

module.exports = async () => {
    const groupsTeachers = [
        { group_id: 1, login: "admin" },
        { group_id: 2, login: "danya" },
        { group_id: 3, login: "kirill" },
        { group_id: 4, login: "roman" },
        { group_id: 5, login: "admin" },
        { group_id: 6, login: "admin" },
        { group_id: 7, login: "admin" },
        { group_id: 8, login: "user" },
    ]
    for (const groupTeacher of groupsTeachers) {
        await db.GroupsTeachers.create({ ...groupTeacher })
    }
};