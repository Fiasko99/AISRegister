const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class GroupService {
    
    async replacingGroupIdWithData(data, withoutGroupId = true) {
        return Promise.all(data.map(async (groupDay) => {
            const groupData = await db.Groups.findOne({
                where: { id: groupDay.group_id },
                raw: true
            })
            const data = { ...groupDay, ...groupData }
            if (withoutGroupId) delete data.group_id;
            delete data.id;
            return data
        }))
    }

}

module.exports = new GroupService();