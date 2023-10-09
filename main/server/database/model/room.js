const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
module.exports = (connection) => {
    const Room = connection.define("Room", {
        name: { type: DataTypes.STRING, allowNull: false, trim: true },
        RoomLink: { type: DataTypes.STRING, allowNull: false, trim: true },
        Password: { type: DataTypes.STRING, allowNull: false, trim: true },
        StartTime: { type: DataTypes.TIME, allowNull: false, trim: true },
        EndTime: { type: DataTypes.TIME, allowNull: false, trim: true },
    });
    Room.beforeCreate((Room, options) => {
        Room.password = bcrypt.hashSync(Room.password, saltRounds);
    });
    return Room
}