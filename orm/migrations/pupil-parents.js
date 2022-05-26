const { db } = require('../sequelize')

module.exports = async () => {
    const pupilParents = [
        { phone: '7(495) 239-79-74', fullname: 'Костин Бенедикт Митрофанович', pupil_id: 1 },
        { phone: '7(495) 003-67-45', fullname: 'Колесникова Лиза Геннадиевна', pupil_id: 1 },
        
        { phone: '7(495) 061-63-92', fullname: 'Ефремов Ростислав Семёнович', pupil_id: 2 },
        { phone: '7(495) 103-60-80', fullname: 'Лобанова Татьяна Алексеевна', pupil_id: 2 },
        
        { phone: '7(495) 200-27-49', fullname: 'Гурьев Павел Васильевич', pupil_id: 3 },
        { phone: '7(495) 535-37-01', fullname: 'Иванкова Роксана Наумовна', pupil_id: 3 },
        
        { phone: '7(495) 635-02-75', fullname: 'Ларионов Прохор Авдеевич', pupil_id: 4 },
        { phone: '7(495) 881-86-21', fullname: 'Фролова Сима Аркадьевна', pupil_id: 4 },
        
        { phone: '7(495) 211-05-18', fullname: 'Дементьев Тимур Дамирович', pupil_id: 5 },
        { phone: '7(495) 433-24-50', fullname: 'Лобанова Ирина Евгеньевна', pupil_id: 5 },
        
        { phone: '7(495) 861-14-76', fullname: 'Соболев Леонтий Даниилович', pupil_id: 6 },
        { phone: '7(495) 571-29-21', fullname: 'Мясникова Надежда Богдановна', pupil_id: 6 },
        
        { phone: '7(495) 333-84-29', fullname: 'Елисеев Ян Константинович', pupil_id: 7 },
        { phone: '7(495) 620-18-12', fullname: 'Корнилова Диодора Владиславовна', pupil_id: 7 },
        
        { phone: '7(495) 748-21-44', fullname: 'Самойлов Венедикт Всеволодович', pupil_id: 8 },
        { phone: '7(495) 269-28-14', fullname: 'Мухина Сильвия Кирилловна', pupil_id: 8 },
        
        { phone: '7(495) 481-91-08', fullname: 'Поляков Иннокентий Максимович', pupil_id: 9 },
        { phone: '7(495) 388-10-18', fullname: 'Авдеева Влада Фроловна', pupil_id: 9 },
        
        { phone: '7(495) 670-71-55', fullname: 'Сафонов Борис Пётрович', pupil_id: 10 },
        { phone: '7(495) 156-06-13', fullname: 'Медведева Ева Юлиановна', pupil_id: 10 },
    ]
    for (const pupilParent of pupilParents) {
        await db.PupilParents.create({ ...pupilParent })
    }
};