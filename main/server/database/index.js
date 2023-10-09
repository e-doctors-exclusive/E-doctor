const  {Sequelize , DataTypes}  = require("sequelize");
// const population = require("./model/population.js");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const PatientModel = require("./model/patient.js")
const DoctorModel = require("./model/doctor.js")
const ReviewModel = require("./model/review.js")
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

const Patient = PatientModel(connection)
const Doctor = DoctorModel(connection)
const Review = ReviewModel(connection)



// connection.sync({force:true}).then(() => console.log("Database & tables created!"))

module.exports = {Patient,Doctor,Review};
