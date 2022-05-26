module.exports = (sequelize, DataTypes) => {
    const TeacherMails = sequelize.define("TeacherMails", {
        mail: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
    }, { timestamps: false });

    return TeacherMails;
};