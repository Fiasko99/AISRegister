module.exports = (sequelize, DataTypes) => {
    const Months = sequelize.define("Months", {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sequence: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        }
    }, { timestamps: false });

    return Months;
};