const { Sequelize, DataTypes } = require("sequelize")
const connection = require("../index.js")

const bcrypt = require("bcryptjs");
const saltRounds = 10;
console.log(connection);

module.exports = (connection) => {
  const User = connection.define("user", {
        name: { type: DataTypes.STRING, allowNull: false, trim: true },
        lastName: { type: DataTypes.STRING, allowNull: false, trim: true },
        adress: { type: DataTypes.STRING, allowNull: false, trim: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true, trim: true },
        password: { type: DataTypes.STRING, allowNull: false, trim: true },
      });
      User.beforeCreate((user, options) => {
        user.password = bcrypt.hashSync(user.password, saltRounds);
      });
return User
    }
