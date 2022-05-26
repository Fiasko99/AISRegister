const { db } = require('../sequelize')

module.exports = async () => {
    const days = [2, 9, 16, 23, 30, 7, 14, 21, 28]
    const monthNumber = 9
    const attendanceCount = 8
    const pupilsCount = 10
    const attendancesPupils = []
    for (let pupilCount = 1; pupilCount <= pupilsCount; pupilCount++) {
        for (let monthCount = 1; monthCount <= attendanceCount; monthCount++) {
            for (const day of days) {
                attendancesPupils.push({ day, attendance_id: monthCount * monthNumber, pupil_id: pupilCount})
            }
        }
    }
    for (const attendancePupil of attendancesPupils) {
        await db.AttendancesPupils.create({ ...attendancePupil })
    }
};