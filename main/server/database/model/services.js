const { DataTypes } = require("sequelize");
module.exports = (connection) => {
    const Service = connection.define("Service", {
        ServiceName: { type: DataTypes.STRING, allowNull: false, trim: true },
        Cost: { type: DataTypes.INTEGER, allowNull: false, trim: true },
        ServiceDescription: { type: DataTypes.STRING, allowNull: false, trim: true }
    });
    return Service
}