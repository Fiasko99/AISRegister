const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class PupilMailService {
    async getByPupilId(pupilId) {
        const mails = await db.PupilMails.findAll({
            where: { pupil_id: pupilId },
            raw: true
        })
        return mails
    }

}

module.exports = new PupilMailService();