const { DataTypes } = require("sequelize")
const bcrypt = require("bcryptjs");
const saltRounds = 10;
module.exports = (connection) => {
  const Patient = connection.define("patient", {
    name: { type: DataTypes.STRING, allowNull: false, trim: true },
    lastName: { type: DataTypes.STRING, allowNull: false, trim: true },
    Address: { type: DataTypes.STRING, allowNull: false, trim: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, trim: true },
    password: { type: DataTypes.STRING, allowNull: false, trim: true },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&uid=R68467429&ga=GA1.1.970682958.1696962532&semt=ais'
    }
  });
  Patient.beforeCreate((patient, options) => {
    patient.password = bcrypt.hashSync(patient.password, saltRounds);
  });
  return Patient
}
