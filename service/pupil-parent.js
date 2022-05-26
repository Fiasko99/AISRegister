const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class PupilParentsService {
    async getByPupilId(pupilId) {
        const parents = await db.PupilParents.findAll({
            where: { pupil_id: pupilId },
            raw: true
        })
        return parents
    }

}

module.exports = new PupilParentsService();