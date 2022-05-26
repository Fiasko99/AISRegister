module.exports = (sequelize, DataTypes) => {
    const Payrolls = sequelize.define("Payrolls", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        pay_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    }, { timestamps: false });

    return Payrolls
};