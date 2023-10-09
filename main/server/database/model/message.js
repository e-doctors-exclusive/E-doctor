const { DataTypes } = require("sequelize");

module.exports = (connection) => {
    const Message = connection.define("Message", {
        MessageContent:{type:DataTypes.STRING,allowNull:false,trim:true}
    });
    return Message
}