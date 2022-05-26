const { db } = require('../orm/sequelize');
const bcrypt = require('bcrypt');
const tokenService = require('./token');
const ApiError = require('../exceptions/api-error');

class TeacherService {

    async #saveTokens(teacher, tokens) {
        teacher.access_token = tokens.accessToken
        teacher.refresh_token = tokens.refreshToken
        await teacher.save()
        return tokens
    }

    async registration(data) {
        const {
            login,
            password,
        } = data
        const candidate = await db.Teachers.findOne({
            where: {
                login: login
            }
        })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с логином ${login} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 8);
        delete data.password
        const teacher = await db.Teachers.create({
            ...data,
            password: hashPassword,
            role: 'teacher',
        })

        const tokens = tokenService.generateTokens({login: teacher.login, role: teacher.role});
        return await this.#saveTokens(teacher, tokens);
    }

    async logIn(login, password) {
        const teacher = await db.Teachers.findOne({
            where: {
                login: login
            }
        })
        if (!teacher) {
            throw ApiError.BadRequest(`Пользователь с логином ${login} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, teacher.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        const tokens = tokenService.generateTokens({login: teacher.login, role: teacher.role});
        return await this.#saveTokens(teacher, tokens);
    }

    async logout(refreshToken) {
        const teacher = await db.Teachers.findOne({
            where: { refresh_token: refreshToken }
        })
        if (!teacher) {
            throw ApiError.BadRequest('Не удалось выйти из аккаунта')
        }
        teacher.access_token = ''
        teacher.refresh_token = ''
        await teacher.save()
        return 'Успешный выход'
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.BadRequest('Пользователь не авторизирован')
        }
        const teacherData = tokenService.validateRefreshToken(refreshToken);
        const teacher = await db.Teachers.findOne({
            where: {
                login: teacherData.login
            }
        })
        if (!teacher) {
            throw ApiError.BadRequest('Пользователь не найден')
        }
        if (teacher.refresh_token != refreshToken) {
            throw ApiError.BadRequest('Токены не совпадают')
        }

        const tokens = tokenService.generateTokens({login: teacher.login, role: teacher.role});
        return await this.#saveTokens(teacher, tokens);
    }

    async getAll() {
        const teachers = await db.Teachers.findAll({
            where: { role: 'teacher' },
            attributes: [
                'login',
                'firstname',
                'name',
                'lastname',
                'work_phone',
                'personal_phone',
            ]
        })
        return teachers
    }
}

module.exports = new TeacherService();