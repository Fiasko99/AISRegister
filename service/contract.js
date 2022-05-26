const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class ContractService {
    
    async getByPupilId(pupilId, groupId) {
        const contract = await db.Contracts.findOne({
            where: { pupil_id: pupilId, group_id: groupId },
            raw: true
        })
        return contract
    }
}

module.exports = new ContractService();