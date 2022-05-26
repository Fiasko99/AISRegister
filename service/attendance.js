const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class AttendanceService {
    
    async getByGroupId(groupId, monthName) {
        const data = await db.Attendances.findOne({
            where: { group_id: groupId, month_name: monthName },
            attributes: ['id', 'month_name'],
            raw: true
        })
        data.attendance_id = data.id
        delete data.id
        return data
    }

    async getByAttendanceId(attendanceId, manthName) {
        const attendance = await db.Attendances.findOne({
            where: { id: attendanceId, month_name: manthName },
            raw: true
        })

        return attendance
    }

}

module.exports = new AttendanceService();