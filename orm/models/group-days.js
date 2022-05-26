module.exports = (sequelize, DataTypes) => {
    const GroupDays = sequelize.define("GroupDays", {
        start_time: {
            type: DataTypes.TIME,
            allowNuul: false,
            primaryKey: true
        }, 
        study_room: {
            type: DataTypes.STRING,
            allowNuul: false,
            primaryKey: true
        },
        isOnline: {
            type: DataTypes.BOOLEAN,
            allowNuul: false
        }
    }, { timestamps: false });


    return GroupDays;
};