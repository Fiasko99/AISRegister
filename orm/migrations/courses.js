const { db } = require('../sequelize')

module.exports = async () => {
    const courses = [
        'Веб-программирование',
        'Программирование на Python',
        'Веб-технологии',
        'Клиент-серверные приложения',
    ]
    for (const name of courses) {
        await db.Courses.create({ name })
    }
};