module.exports = (sequelize, DataTypes) => {
    const Groups = sequelize.define("Groups", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_lesson: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    return Groups;
};