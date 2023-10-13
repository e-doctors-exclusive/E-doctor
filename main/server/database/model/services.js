const { DataTypes } = require("sequelize");
module.exports = (connection) => {
  const Service = connection.define("Service", {
    picture: {
      type: DataTypes.STRING,
      defaultValue:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&uid=R68467429&ga=GA1.1.970682958.1696962532&semt=ais",
    },
    ServiceName: { type: DataTypes.STRING, allowNull: false, trim: true },
    Cost: { type: DataTypes.INTEGER, allowNull: false, trim: true },
    ServiceDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
  });
  return Service;
};
