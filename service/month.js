const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class MonthService {
    
    async getById(monthId) {
        const data = await db.Months.findOne({
            where: { id: monthId },
            raw: true
        })
        return data.name
    }

    async existMonth(monthName) {
        const month = await db.Months.findOne({
            where: { name: monthName }
        })
        if (month) {
            return true
        }
        return false
    }
}

module.exports = new MonthService();