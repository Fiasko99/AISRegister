const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class PupilService {
    async getAll() {
        const pupils = await db.Pupils.findAll()
        return pupils
    }

    async getByIds(pupilsIds) {
        const pupils = await Promise.all(pupilsIds.map(async pupilId => {
            return await db.Pupils.findOne({ 
                where: { id: pupilId },
                raw: true
             })
        }))
        return pupils
    }

    async getById(pupilId) {
        const pupil = await db.Pupils.findOne({ 
            where: { id: pupilId },
            raw: true
         })
        return pupil
    }

}

module.exports = new PupilService();