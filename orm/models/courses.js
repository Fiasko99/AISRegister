module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("Courses", {
        name: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
    }, { timestamps: false });

    return Courses;
};