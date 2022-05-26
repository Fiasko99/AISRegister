const { db } = require('../sequelize')

module.exports = async () => {
    const months = [
        {id: 1, name: 'Январь', count: 31, sequence: 5},
        {id: 2, name: 'Февраль', count: 29, sequence: 6},
        {id: 3, name: 'Март', count: 31, sequence: 7},
        {id: 4, name: 'Апрель', count: 30, sequence: 8},
        {id: 5, name: 'Май', count: 31, sequence: 9},
        {id: 6, name: 'Июнь', count: 30, sequence: 10},
        {id: 7, name: 'Июль', count: 31, sequence: 11},
        {id: 8, name: 'Август', count: 31, sequence: 12},
        {id: 9, name: 'Сентябрь', count: 30, sequence: 1},
        {id: 10, name: 'Октябрь', count: 31, sequence: 2},
        {id: 11, name: 'Ноябрь', count: 30, sequence: 3},
        {id: 12, name: 'Декабрь', count: 31, sequence: 4},
    ]
    
    try {
        for (const month of months) {
            await db.Months.create({ ...month })
        }
    } catch (error) {
        console.log('Запись уже создана');
    }
}

