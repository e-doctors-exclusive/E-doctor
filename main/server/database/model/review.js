const { DataTypes } = require("sequelize");
module.exports = (connection) => {
    const Review = connection.define("Review", {
        content: { type: DataTypes.TEXT, allowNull: false, trim: true },
        rating: { type: DataTypes.INTEGER, allowNull: false, trim: true , defaultValue: 0},
        HelpCount: { type: DataTypes.INTEGER, allowNull: false, trim: true, defaultValue: 0 },
        DocReply: { type: DataTypes.TEXT, allowNull: false, trim: true, defaultValue: "" }
    })
    return Review
}