const { db } = require('../sequelize')

module.exports = async () => {
    const groups = [
        { name: "Первая группа", course_name: "Веб-программирование", time_lesson: 60, },
        { name: "Вторая группа", course_name: "Веб-программирование", time_lesson: 60, },
        { name: "Первая группа", course_name: "Программирование на Python", time_lesson: 60, },
        { name: "Вторая группа", course_name: "Программирование на Python", time_lesson: 60, },
        { name: "Первая группа", course_name: "Веб-технологии", time_lesson: 60, },
        { name: "Вторая группа", course_name: "Веб-технологии", time_lesson: 60, },
        { name: "Первая группа", course_name: "Клиент-серверные приложения", time_lesson: 60, },
        { name: "Вторая группа", course_name: "Клиент-серверные приложения", time_lesson: 60, },
    ]
    for (const group of groups) {
        await db.Groups.create({ ...group })
    }
};