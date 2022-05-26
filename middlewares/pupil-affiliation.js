const ApiError = require('../exceptions/api-error');
const groupTeacherService = require('../service/group-teacher');
const groupPupilService = require('../service/group-pupil');

module.exports = async function (req, res, next) {
    try {
        const { login } = req.user;
        const { pupilId } = req.params

        if (!pupilId) {
            return next(ApiError.BadRequest('Параметр группы отсутствует'));
        }

        if (isNaN(pupilId)) {
            return next(ApiError.BadRequest('Параметр не является числом'));
        }

        const groupsTeacher = await groupTeacherService.getByLogin(login)
        const groupsPupil = await groupPupilService.getGroupsIdsByPupilId(pupilId)

        const findEqual = (a, b) => {
            return a.some(elem => b.includes(elem))
        }

        if (!findEqual(groupsTeacher.map(groupTeacher => groupTeacher.group_id), groupsPupil)) {
            return next(ApiError.AccessDenied());
        }

        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};