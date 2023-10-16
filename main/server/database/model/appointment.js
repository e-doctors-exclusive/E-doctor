const { DataTypes } = require("sequelize");
module.exports = (connection) => {
    const Appointment = connection.define("Appointment", {
        AppointmentTime: { type: DataTypes.TIME, allowNull: false, trim: true },
        AppointmentStatus: {
            type: DataTypes.ENUM({
                values: ["Pending", "Completed", "Cancelled"]
            }),
            defaultValue:"Pending"
        },
        AppointmentDuration: { type: DataTypes.INTEGER,  trim: true, defaultValue: 30 },
        Notes: { type: DataTypes.TEXT,  trim: true,defaultValue: "" },
        ReasonForVisit: { type: DataTypes.TEXT, trim: true, defaultValue:""}
    })
    return Appointment
}