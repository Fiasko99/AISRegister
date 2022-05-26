module.exports = (sequelize, DataTypes) => {
    const Pupils = sequelize.define("Pupils", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fisrtname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        personal_phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false });

    return Pupils;
};