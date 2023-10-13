const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
module.exports = (connection) => {
  const Doctor = connection.define("Doctor", {
    name: { type: DataTypes.STRING, allowNull: false, trim: true },
    lastName: { type: DataTypes.STRING, allowNull: false, trim: true },
    Address: { type: DataTypes.STRING, allowNull: false, trim: true },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true,
    },
    password: { type: DataTypes.STRING, allowNull: false, trim: true },
    MedicalInfo: {
      type: DataTypes.ENUM({
        values: [
          "Neurosurgeons",
          "Thoracic Surgeons",
          "Orthopedic Surgeons",
          "Plastic Surgeons,",
          "Oral and Maxillofacial Surgeons",
          "Family Physicians",
          "Internists",
          "Emergency Physicians",
          "Psychiatrists",
          "Obstetricians",
          "Dentists",
        ],
      }),
      allowNull: false,
      trim: true,
    },
    rating: { type: DataTypes.STRING, allowNull: true, trim: true },
    avatar: {
      type: DataTypes.STRING,
      defaultValue:
        "https://img.freepik.com/free-vector/faceless-portrait-nurse-isolated-vector-illustration_7504-679.jpg?size=626&ext=jpg&uid=R68467429&ga=GA1.1.970682958.1696962532&semt=ais",
      trim: true,
    },
    bio: {
      type: DataTypes.STRING,
      dafaultValue: "Please Write Down your Bio here ",
      trim: true,
    },
  });
  Doctor.beforeCreate((Doctor, options) => {
    Doctor.password = bcrypt.hashSync(Doctor.password, saltRounds);
  });
  return Doctor;
};
