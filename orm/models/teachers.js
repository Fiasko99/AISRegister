module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define("Teachers", {
        login: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
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
        work_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        personal_phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, { timestamps: false });

    return Teachers;
};