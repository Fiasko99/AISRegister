const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class PupilService {
    async getByLogin(login) {
        const groupsTeacher = await db.GroupsTeachers.findAll({
            where: { login },
            raw: true
        })
        return groupsTeacher
    }
}

module.exports = new PupilService();