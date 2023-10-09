const  {Sequelize , DataTypes}  = require("sequelize");
// const population = require("./model/population.js");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const UserModel = require("./model/user.js")
const connection = new Sequelize("edoctor", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  connection.authenticate();
  console.log("connected to db ");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const User = UserModel(connection)



// connection.sync({force:true}).then(() => console.log("Database & tables created!"))

module.exports = {User};
