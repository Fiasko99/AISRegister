module.exports = (sequelize, DataTypes) => {
    const GroupsTeachers = sequelize.define("GroupsTeachers", {}, {timestamps: false});

    GroupsTeachers.removeAttribute('id')

    return GroupsTeachers;
};