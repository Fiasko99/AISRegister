module.exports = (sequelize, DataTypes) => {
    const Attendances = sequelize.define("Attendances", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, { timestamps: false });

    return Attendances;
};