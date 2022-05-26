const { db } = require('../orm/sequelize');
const ApiError = require('../exceptions/api-error');

class AttendancePupilService {
    
    async getByAttendanceId(attendanceId) {
        const attendancesPupils = await db.AttendancesPupils.findAll({
            where: { attendance_id: attendanceId },
            raw: true
        })
        return attendancesPupils
    }

    async getByPupilId(pupilId) {
        const attendancesPupil = db.AttendancesPupils.findAll({
            where: { pupil_id: pupilId },
            raw: true
        })

        return attendancesPupil
    }
}

module.exports = new AttendancePupilService();