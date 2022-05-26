module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("Roles", {
        name: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
    }, { timestamps: false });
    return Roles;
};