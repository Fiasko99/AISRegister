const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class GroupDayService {
    
    async getByGroupId(id) {
        const weekDays = await db.GroupDays.findAll({
            where: { group_id: id },
            raw: true
        })
        return weekDays
    }
}

module.exports = new GroupDayService();