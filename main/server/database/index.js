const { Sequelize } = require("sequelize");
const saltRounds = 10;
const PatientModel = require("./model/patient.js")
const DoctorModel = require("./model/doctor.js")
const ReviewModel = require("./model/review.js")
const RoomModel = require("./model/room.js")
const AppointmentModel = require("./model/appointment.js")
const MessageModel = require("./model/message.js")
const ServiceModel = require("./model/services.js")
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
const Room = RoomModel(connection)
const Appointment = AppointmentModel(connection)
const Message =MessageModel(connection)
const Service =ServiceModel(connection)


connection.sync({force:true}).then(() => console.log("Database & tables created!"))


module.exports = { User, Doctor, Review, Room, Appointment,Message,Service };

