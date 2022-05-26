module.exports = (db) => {

    //#region One-To-Many Teacher->Role
    db.Roles.hasMany(db.Teachers, {
        foreignKey: {
            name: 'role',
            sourceKey: 'name',
        }
    })
    db.Teachers.belongsTo(db.Roles, {
        foreignKey: {
            name: 'role',
            targetKey: 'name',
        }
    })
    //#endregion

    //#region One-To-Many TeacherMails->Teachers
    db.Teachers.hasMany(db.TeacherMails, {
        foreignKey: {
            name: 'login',
            sourceKey: 'login',
        }
    })
    db.TeacherMails.belongsTo(db.Teachers, {
        foreignKey: {
            name: 'login',
            targetKey: 'login',
        }
    })
    //#endregion

    //#region One-To-Many PupilMails->Pupils
    db.Pupils.hasMany(db.PupilMails, {
        foreignKey: {
            name: 'pupil_id',
            sourceKey: 'id',
        }
    })
    db.PupilMails.belongsTo(db.Pupils, {
        foreignKey: {
            name: 'pupil_id',
            targetKey: 'id',
        }
    })
    //#endregion

    //#region One-To-Many PupilParents->Pupils
    db.Pupils.hasMany(db.PupilParents, {
        foreignKey: {
            name: 'pupil_id',
            sourceKey: 'id',
        }
    })
    db.PupilParents.belongsTo(db.Pupils, {
        foreignKey: {
            name: 'pupil_id',
            targetKey: 'id',
        }
    })
    //#endregion

    //#region  One-To-Many GroupsPupils->Pupils
    db.Pupils.hasMany(db.GroupsPupils, {
        foreignKey: {
            name: 'pupil_id',
            sourceKey: 'id',
            primaryKey: true,
        }
    })
    db.GroupsPupils.belongsTo(db.Pupils, {
        foreignKey: {
            name: 'pupil_id',
            targetKey: 'id',
            primaryKey: true,
        }
    })
    //#endregion

    //#region One-To-Many GroupsPupils->Groups
    db.Groups.hasMany(db.GroupsPupils, {
        foreignKey: {
            name: 'group_id',
            sourceKey: 'id',
            primaryKey: true,
        }
    })
    db.GroupsPupils.belongsTo(db.Groups, {
        foreignKey: {
            name: 'group_id',
            targetKey: 'id',
            primaryKey: true,
        }
    })
    //#endregion

    //#region One-To-Many GroupsTeachers->Groups
    db.Groups.hasMany(db.GroupsTeachers, {
        foreignKey: {
            name: 'group_id',
            sourceKey: 'id',
            primaryKey: true,
        }
    })
    db.GroupsTeachers.belongsTo(db.Groups, {
        foreignKey: {
            name: 'group_id',
            targetKey: 'id',
            primaryKey: true,
        }
    })
    //#endregion

    //#region One-To-Many GroupsTeachers->Teachers 
    db.Teachers.hasMany(db.GroupsTeachers, {
        foreignKey: {
            name: 'login',
            sourceKey: 'login',
            primaryKey: true,
        }
    })
    db.GroupsTeachers.belongsTo(db.Teachers, {
        foreignKey: {
            name: 'login',
            targetKey: 'login',
            primaryKey: true,
        }
    })
    //#endregion

    //#region One-To-Many Groups->Courses 
    db.Courses.hasMany(db.Groups, {
        foreignKey: {
            name: 'course_name',
            sourceKey: 'name',
            allowNull: false
        }
    })
    db.Groups.belongsTo(db.Courses, {
        foreignKey: {
            name: 'course_name',
            targetKey: 'name',
            allowNull: false
        }
    })
    //#endregion

    //#region One-To-Many Attendances->Groups
    db.Groups.hasMany(db.Attendances, {
        foreignKey: {
            name: 'group_id',
            sourceKey: 'id',
        }
    })
    db.Attendances.belongsTo(db.Groups, {
        foreignKey: {
            name: 'group_id',
            targetKey: 'id',
        }
    })
    //#endregion

    //#region One-To-Many Attendances->Months
    db.Months.hasMany(db.Attendances, {
        foreignKey: {
            name: 'month_name',
            sourceKey: 'name',
        }
    })
    db.Attendances.belongsTo(db.Months, {
        foreignKey: {
            name: 'month_name',
            targetKey: 'name',
        }
    })
    //#endregion

    //#region One-To-Many AttendancesPupils->Attendances
    db.Attendances.hasMany(db.AttendancesPupils, {
        foreignKey: {
            name: 'attendance_id',
            sourceKey: 'id',
            primaryKey: true,
        }
    })
    db.AttendancesPupils.belongsTo(db.Attendances, {
        foreignKey: {
            name: 'attendance_id',
            targetKey: 'id',
            primaryKey: true,
        }
    })
    //#endregion

    //#region One-To-Many AttendancesPupils->Pupils
    db.Pupils.hasMany(db.AttendancesPupils, {
        foreignKey: {
            name: 'pupil_id',
            sourceKey: 'id',
            primaryKey: true,
        }
    })
    db.AttendancesPupils.belongsTo(db.Pupils, {
        foreignKey: {
            name: 'pupil_id',
            targetKey: 'id',
            primaryKey: true,
        }
    })
    //#endregion

    //#region One-To-Many Contracts->Groups
    db.Groups.hasMany(db.Contracts, {
        foreignKey: {
            name: 'group_id',
            sourceKey: 'id',
        }
    })
    db.Contracts.belongsTo(db.Groups, {
        foreignKey: {
            name: 'group_id',
            targetKey: 'id',
        }
    })
    //#endregion

    //#region One-To-Many Contracts->Pupils
    db.Pupils.hasMany(db.Contracts, {
        foreignKey: {
            name: 'pupil_id',
            sourceKey: 'id',
        }
    })
    db.Contracts.belongsTo(db.Pupils, {
        foreignKey: {
            name: 'pupil_id',
            targetKey: 'id',
        }
    })
    //#endregion
    
    //#region One-To-Many Payrolls->Contracts
    db.Contracts.hasMany(db.Payrolls, {
        foreignKey: {
            name: 'contract_id',
            sourceKey: 'id',
        }
    })
    db.Payrolls.belongsTo(db.Contracts, {
        foreignKey: {
            name: 'contract_id',
            targetKey: 'id',
        }
    })
    //#endregion
    
    //#region One-To-Many GroupDays->Groups
    db.Groups.hasMany(db.GroupDays, {
        foreignKey: {
            name: 'group_id',
            sourceKey: 'id',
        }
    })
    db.GroupDays.belongsTo(db.Groups, {
        foreignKey: {
            name: 'group_id',
            targetKey: 'id',
        }
    })
    //#endregion

    //#region One-To-Many GroupDays->WeekDays
    db.WeekDays.hasMany(db.GroupDays, {
        foreignKey: {
            name: 'week_day_name',
            sourceKey: 'name',
            primaryKey: true
        }
    })
    db.GroupDays.belongsTo(db.WeekDays, {
        foreignKey: {
            name: 'week_day_name',
            targetKey: 'name',
            primaryKey: true
        }
    })
    //#endregion

    return db
}