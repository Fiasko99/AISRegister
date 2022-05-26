const { db } = require('../sequelize')

module.exports = async () => {
    const pupils = [
        {
            fisrtname: 'Иванов',
            name: 'Иван',
            lastname: 'Иванович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Петров',
            name: 'Петр',
            lastname: 'Петрович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Сидоров',
            name: 'Сидор',
            lastname: 'Сидорович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Симонов',
            name: 'Симон',
            lastname: 'Симонович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Карпов',
            name: 'Карп',
            lastname: 'Карпович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Семенов',
            name: 'Семен',
            lastname: 'Семенович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Наглов',
            name: 'Нагл',
            lastname: 'Наглович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Абдурахманов',
            name: 'Абдурахман',
            lastname: 'Абдурахманович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Дмитров',
            name: 'Дмитрий',
            lastname: 'Дмитрович',
            personal_phone: '+7 (989) 999-99-99',
        }, {
            fisrtname: 'Рогов',
            name: 'Рог',
            lastname: 'Рогович',
            personal_phone: '+7 (989) 999-99-99',
        }
    ]
    for (const pupil of pupils) {
        await db.Pupils.create({ ...pupil })
    }
};