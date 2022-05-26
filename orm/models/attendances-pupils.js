module.exports = (sequelize, DataTypes) => {
    const AttendancesPupils = sequelize.define("AttendancesPupils", {
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        }
    }, { timestamps: false });

    return AttendancesPupils;
};