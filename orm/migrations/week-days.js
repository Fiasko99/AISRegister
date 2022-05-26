const { db } = require("../sequelize");

module.exports = async () => {
    const weekDays = [
        { name: 'Понедельник' },
        { name: 'Вторник' },
        { name: 'Среда' },
        { name: 'Четверг' },
        { name: 'Пятница' },
        { name: 'Суббота' },
    ]
    for (const day of weekDays) {
        await db.WeekDays.create({ ...day })
    }
};