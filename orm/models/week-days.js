module.exports = (sequelize, DataTypes) => {
    const WeekDays = sequelize.define("WeekDays", {
        name: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
    }, { timestamps: false });

    return WeekDays;
};