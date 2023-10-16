const { DataTypes } = require("sequelize");
module.exports = (connection) => {
    const Appointment = connection.define("Appointment", {
        AppointmentTime: { type: DataTypes.TIME, allowNull: false, trim: true },
        AppointmentStatus: {
            type: DataTypes.ENUM({
                values: ["Scheduled", "Completed", "Cancelled"]
            }),
            defaultValue:"Scheduled"
        },
        AppointmentDuration: { type: DataTypes.INTEGER, allowNull: false, trim: true, defaultValue: 30 },
        Notes: { type: DataTypes.TEXT, allowNull: true, trim: true,defaultValue: "" },
        ReasonForVisit: { type: DataTypes.TEXT, allowNull: false, trim: true, defaultValue:""}
    })
    return Appointment
}