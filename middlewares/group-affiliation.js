const ApiError = require('../exceptions/api-error');
const groupTeacherService = require('../service/group-teacher');

module.exports = async function (req, res, next) {
    try {
        const { login } = req.user;
        const { groupId } = req.params

        if (!groupId) {
            return next(ApiError.BadRequest('Параметр группы отсутствует'));
        }

        if (isNaN(groupId)) {
            return next(ApiError.BadRequest('Параметр не является числом'));
        }

        const groupsTeacher = await groupTeacherService.getByLogin(login)

        if (!groupsTeacher.map(a => a.group_id).includes(parseInt(groupId))) {
            return next(ApiError.AccessDenied());
        }

        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};