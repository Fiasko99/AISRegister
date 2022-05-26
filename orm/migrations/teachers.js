const bcrypt = require("bcrypt");
const { db } = require("../sequelize");

module.exports = async () => {
    const teachers = [
        {
            login: 'admin' ,
            password: await bcrypt.hash('admin', 8) ,
            firstname: 'Пирогова',
            name: 'Дарья',
            lastname: 'Сергеевна',
            work_phone: '+7 (918) 285-99-33',
            personal_phone: '+7 (918) 285-99-33',
            access_token: '',
            refresh_token: '',
            role: 'administrator'
        }, {
            login: 'user' ,
            password: await bcrypt.hash('user', 8) ,
            firstname: 'Наумов',
            name: 'Лев',
            lastname: 'Николаевич',
            work_phone: '+7 (918) 285-99-33',
            personal_phone: '+7 (918) 285-99-33',
            access_token: '',
            refresh_token: '',
            role: 'teacher'
        }, {
            login: 'roman' ,
            password: await bcrypt.hash('roman', 8) ,
            firstname: 'Романов',
            name: 'Роман',
            lastname: 'Генадьевич',
            work_phone: '+7 (918) 285-99-33',
            personal_phone: '+7 (918) 285-99-33',
            access_token: '',
            refresh_token: '',
            role: 'teacher'
        }, {
            login: 'kirill' ,
            password: await bcrypt.hash('kirill', 8) ,
            firstname: 'Скопцов',
            name: 'Кирилл',
            lastname: 'Александрович',
            work_phone: '+7 (918) 285-99-33',
            personal_phone: '+7 (918) 285-99-33',
            access_token: '',
            refresh_token: '',
            role: 'teacher'
        }, {
            login: 'danya' ,
            password: await bcrypt.hash('danya', 8) ,
            firstname: 'Пирогов',
            name: 'Даниил',
            lastname: 'Павлович',
            work_phone: '+7 (918) 285-99-33',
            personal_phone: '+7 (918) 285-99-33',
            access_token: '',
            refresh_token: '',
            role: 'teacher'
        }
    ]
    for (const teacher of teachers) {
        await db.Teachers.create({ ...teacher })
    }
};