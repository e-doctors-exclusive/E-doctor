const {DataTypes} = require("sequelize")
const bcrypt = require("bcryptjs");
const saltRounds = 10;
module.exports = (connection) => {
  const Patient = connection.define("patient", {
    name: { type: DataTypes.STRING, allowNull: false, trim: true },
    lastName: { type: DataTypes.STRING, allowNull: false, trim: true },
    Address: { type: DataTypes.STRING, allowNull: false, trim: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, trim: true },
    password: { type: DataTypes.STRING, allowNull: false, trim: true },
  });
  Patient.beforeCreate((patient, options) => {
    patient.password = bcrypt.hashSync(patient.password, saltRounds);
  });
  return Patient
}
