const { DataTypes } = require("sequelize");
module.exports = (connection) => {
    const Review = connection.define("Review", {
        content: { type: DataTypes.TEXT, allowNull: false, trim: true },
        rating: { type: DataTypes.STRING, allowNull: false, trim: true },
        HelpCount: { type: DataTypes.INTEGER, allowNull: false, trim: true, efaultValue: 0 },
        DocReply: { type: DataTypes.TEXT, allowNull: false, trim: true, defaultValue: "" }
    })
    return Review
}