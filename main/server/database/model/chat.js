const { DataTypes } = require("sequelize");

module.exports = (connection) => {
    const Chat = connection.define("Chat", {
        MessageContent: { type: DataTypes.TEXT, allowNull: false, trim: true },
        IsRead: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    });
    return Chat;
}
