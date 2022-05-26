const attendanceService = require('../service/attendance')
const attendancePupilService = require('../service/attendance-pupil')
const pupilService = require('../service/pupil')
const groupService = require('../service/group')
const ApiError = require('../exceptions/api-error');

class AttendanceController {

    async getByGroupId(req, res, next) {
        try {
            const { groupId, monthName } = req.params
            const { attendance_id } = await attendanceService.getByGroupId(groupId, monthName)
            const attendancesPupils = await attendancePupilService.getByAttendanceId(attendance_id)
            const data = await Promise.all(attendancesPupils.map(async attendancePupil => {
                const pupil = await pupilService.getById(attendancePupil.pupil_id)
                delete pupil.id;
                return { ...attendancePupil, ...pupil }
            }))
            res.send(data)
        } catch (e) {
            next(e)
        }
    }

    async getByPupilId(req, res, next) {
        try {
            const { pupilId, monthName } = req.params
            const attendancesPupil = await attendancePupilService.getByPupilId(pupilId)
            const attendances = await Promise.all(attendancesPupil.map(async attendancePupil => {
                const attendance = await attendanceService.getByAttendanceId(attendancePupil.attendance_id, monthName)
                delete attendance.id;
                return { ...attendance, ...attendancePupil }
            }))
            const attendancesWithCourseData = await groupService.replacingGroupIdWithData(attendances)
            res.send(attendancesWithCourseData)
        } catch (e) {
            next(e)
        }
    }
}


module.exports = new AttendanceController();