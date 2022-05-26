const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class GroupPupilService {
    
    async getPupilsIdsByGroupId(groupId) {
        const groupPupils = await db.GroupsPupils.findAll({
            where: { group_id: groupId },
            raw: true
        })

        return groupPupils.map(pupilGroup => pupilGroup.pupil_id)
    }

    async getGroupsIdsByPupilId(pupilId) {
        const groupPupils = await db.GroupsPupils.findAll({
            where: { pupil_id: pupilId },
            raw: true
        })

        return groupPupils.map(pupilGroup => pupilGroup.group_id)
    }

}

module.exports = new GroupPupilService();