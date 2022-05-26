module.exports = (sequelize, DataTypes) => {
    const PupilMails = sequelize.define("PupilMails", {
        mail: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
    }, { timestamps: false });

    return PupilMails;
};