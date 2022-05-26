const teacherService = require('../service/teacher');
const groupTeacherService = require('../service/group-teacher')
const groupDayService = require('../service/group-day')
const groupService = require('../service/group')
const attendanceService = require('../service/attendance');
const MonthService = require('../service/month')
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class TeacherController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const userData = await teacherService.registration(req.body);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({accessToken: userData.accessToken});
        } catch (e) {
            next(e);
        }
    }

    async logIn(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {login, password} = req.body;
            const userData = await teacherService.logIn(login, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({accessToken: userData.accessToken});
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const response = await teacherService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await teacherService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json({accessToken: userData.accessToken});
        } catch (e) {
            next(e);
        }
    }
    
    async getAll(req, res, next) {
        try {
            const teachers = await teacherService.getAll()
            res.send(teachers)
        } catch (e) {
            next(e)
        }
    }

    async getShedule(req, res, next) {
        try {
            const { login } = req.user
            const teacherGroups = await groupTeacherService.getByLogin(login)
            let groupDays = []
            for (const teacherGroup of teacherGroups) {
                groupDays.push(...await groupDayService.getByGroupId(teacherGroup.group_id))
            }
            groupDays = await groupService.replacingGroupIdWithData(groupDays)
            res.send(groupDays)
        } catch (e) {
            next(e)
        }
    }

    async getCourses(req, res, next) {
        try {
            const { login } = req.user
            let courses = {}
            const teacherGroups = await groupTeacherService.getByLogin(login)
            const groups = await groupService.replacingGroupIdWithData(teacherGroups, false)
            for (const group of groups) {
                if (!Object.keys(courses).includes(group.course_name)) {
                    courses[group.course_name] = []
                }
                const currentMonthName = await MonthService.getById(new Date().getMonth() + 1)
                const attendances = await attendanceService.getByGroupId(group.group_id, currentMonthName)
                courses[group.course_name].push({ group_id: group.group_id, group_name: group.name, ...attendances })
            }
            res.send(courses)
        } catch (e) {
            next(e)
        }
    }
}


module.exports = new TeacherController();