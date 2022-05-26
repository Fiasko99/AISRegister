const { db } = require("../sequelize");
const { v4 } = require('uuid')

module.exports = async () => {
    const groupDays = [
        { week_day_name: 'Понедельник', group_id: 1, start_time: '15:00', study_room: '49', isOnline: false },
        { week_day_name: 'Суббота', group_id: 1, start_time: '11:00', study_room: v4(), isOnline: true },
        { week_day_name: 'Понедельник', group_id: 2, start_time: '16:00', study_room: '29', isOnline: false },
        { week_day_name: 'Среда', group_id: 2, start_time: '16:00', study_room: '29', isOnline: false },
        { week_day_name: 'Вторник', group_id: 3, start_time: '15:30', study_room: 'Актовый зал', isOnline: false },
        { week_day_name: 'Суббота', group_id: 3, start_time: '10:00', study_room: v4(), isOnline: true },
        { week_day_name: 'Вторник', group_id: 4 , start_time: '16:30', study_room: 'Актовый зал', isOnline: false },
        { week_day_name: 'Суббота', group_id: 4 , start_time: '10:00', study_room: v4(), isOnline: true },
        { week_day_name: 'Понедельник', group_id: 5, start_time: '17:00', study_room: '29', isOnline: false },
        { week_day_name: 'Среда', group_id: 5, start_time: '17:00', study_room: '29', isOnline: false },
        { week_day_name: 'Понедельник', group_id: 6, start_time: '18:00', study_room: '29', isOnline: false },
        { week_day_name: 'Среда', group_id: 6, start_time: '18:00', study_room: '29', isOnline: false },
        { week_day_name: 'Среда', group_id: 6, start_time: '14:25', study_room: '29', isOnline: false },
        { week_day_name: 'Среда', group_id: 6, start_time: '15:15', study_room: '29', isOnline: false },
        { week_day_name: 'Пятница', group_id: 6, start_time: '18:00', study_room: v4(), isOnline: true },
        { week_day_name: 'Пятница', group_id: 6, start_time: '18:45', study_room: v4(), isOnline: true },
    ]
    for (const day of groupDays) {
        await db.GroupDays.create({ ...day })
    }
};