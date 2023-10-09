const { Sequelize } = require("sequelize");
const saltRounds = 10;
const PatientModel = require("./model/patient.js")
const DoctorModel = require("./model/doctor.js")
const ReviewModel = require("./model/review.js")
const RoomModel = require("./model/room.js")
const AppointmentModel = require("./model/appointment.js")
const MessageModel = require("./model/message.js")
const ServiceModel = require("./model/services.js")
const ChatModel = require("./model/chat.js")
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
const Message = MessageModel(connection)
const Service = ServiceModel(connection)
const Chat = ChatModel(connection)

// A Patient can have many Reviews, Appointments, and Messages
Patient.hasMany(Review);
Patient.hasMany(Appointment);
Patient.hasMany(Message);

// A Doctor can have many Reviews, Appointments, Rooms, Messages, and Services
Doctor.hasMany(Review);
Doctor.hasMany(Appointment);
Doctor.hasMany(Room);
Doctor.hasMany(Message);
Doctor.hasMany(Service);

// A Review belongs to a Patient and a Doctor
Review.belongsTo(Patient);
Review.belongsTo(Doctor);

// An Appointment belongs to a Patient, a Doctor, and a Room
Appointment.belongsTo(Patient);
Appointment.belongsTo(Doctor);
Appointment.belongsTo(Room);

// A Room belongs to a Doctor and has many Appointments
Room.belongsTo(Doctor);
Room.hasMany(Appointment);

// A Message belongs to a Patient (as sender) and a Doctor (as receiver)
Message.belongsTo(Patient);
Message.belongsTo(Doctor);

// A Service belongs to a Doctor
Service.belongsTo(Doctor);

// A Patient (as a doctor) can have many Chats
Doctor.hasMany(Chat);

// A Patient (as a patient) can have many Chats
Patient.hasMany(Chat);

// A Chat belongs to a Patient (as a doctor)
Chat.belongsTo(Doctor);

// A Chat belongs to a Patient (as a patient)
Chat.belongsTo(Patient);

// A Chat can have many Messages
Chat.hasMany(Message);

// A Message belongs to a Chat
Message.belongsTo(Chat);

connection.sync({ force: true }).then(() => console.log("Database & tables created!"))

module.exports = { Patient, Doctor, Review, Room, Appointment, Message, Service, Chat };
