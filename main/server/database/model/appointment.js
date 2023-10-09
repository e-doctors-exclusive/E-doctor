const { DataTypes } = require("sequelize");
module.exports = (connection) => {
    const Appointment = connection.define("Appointment", {
        Appointment: { type: DataTypes.DATE, allowNull: false, trim: true },
        AppointmentTime: { type: DataTypes.TIME, allowNull: false, trim: true },
        AppointmentStatus: {
            type: DataTypes.ENUM({
                values: ["Scheduled", "Completed", "Cancelled"]
            })
        },
        AppointmentDuration: { type: DataTypes.INTEGER, allowNull: false, trim: true, defaultValue: 0 },
        Notes: { type: DataTypes.TEXT, allowNull: true, trim: true},
        ReasonForVisit: { type: DataTypes.TEXT, allowNull: false, trim: true }
    })
    return Appointment
}