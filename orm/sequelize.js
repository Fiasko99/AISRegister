const sequelize = require('./connect')
const { DataTypes } = require('sequelize')

const Months = require('./models/months')(sequelize, DataTypes)
const Roles = require('./models/roles')(sequelize, DataTypes)
const Courses = require('./models/courses')(sequelize, DataTypes)
const Pupils = require('./models/pupils')(sequelize, DataTypes)
const Groups = require('./models/groups')(sequelize, DataTypes)
const Teachers = require('./models/teachers')(sequelize, DataTypes)
const TeacherMails = require('./models/teacher-mails')(sequelize, DataTypes)
const PupilMails = require('./models/pupil-mails')(sequelize, DataTypes)
const PupilParents = require('./models/pupil-parents')(sequelize, DataTypes)
const GroupsPupils = require('./models/groups-pupils')(sequelize, DataTypes)
const GroupsTeachers = require('./models/groups-teachers')(sequelize, DataTypes)
const Attendances = require('./models/attendances')(sequelize, DataTypes)
const AttendancesPupils = require('./models/attendances-pupils')(sequelize, DataTypes)
const Contracts = require('./models/contracts')(sequelize, DataTypes)
const Payrolls = require('./models/payrolls')(sequelize, DataTypes)
const WeekDays = require('./models/week-days')(sequelize, DataTypes)
const GroupDays = require('./models/group-days')(sequelize, DataTypes)


const db = require('./createAssociations')({
    Months, Teachers, Groups,
    Roles, TeacherMails, GroupDays,
    Courses, Pupils, WeekDays,
    PupilMails, PupilParents,
    GroupsPupils, GroupsTeachers,
    Attendances, AttendancesPupils,
    Contracts, Payrolls
})

module.exports = {
    sequelize,
    db
}