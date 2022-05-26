module.exports = (sequelize, DataTypes) => {
    const PupilParentsPhones = sequelize.define("PupilParents", {
        phone: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    }, { timestamps: false });

    return PupilParentsPhones;
};