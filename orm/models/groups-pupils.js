module.exports = (sequelize, DataTypes) => {
    const GroupsPupils = sequelize.define("GroupsPupils", {}, {timestamps: false});

    GroupsPupils.removeAttribute('id')

    return GroupsPupils;
};