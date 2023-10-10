const { DataTypes } = require("sequelize");

module.exports = (connection) => {
    const Chat = connection.define("Chat", {
        Status: { type: DataTypes.ENUM({values:["open","closed"]}), allowNull: false, trim: true },
        IsRead: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    });
    return Chat;
}

