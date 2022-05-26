module.exports = (sequelize, DataTypes) => {
    const Contracts = sequelize.define("Contracts", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
    }, { timestamps: false });
    
    return Contracts;
};