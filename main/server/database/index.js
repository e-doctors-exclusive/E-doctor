const { Sequelize } = require("sequelize");
const saltRounds = 10;
const PatientModel = require("./model/patient.js")
const DoctorModel = require("./model/doctor.js")
const ReviewModel = require("./model/review.js")
const RoomModel = require("./model/room.js")
const AppointmentModel = require("./model/appointment.js")
const MessageModel = require("./model/message.js")
const ServiceModel = require("./model/services.js")
const ChatRoomModel = require("./model/chat.js")
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
const ChatRoom = ChatRoomModel(connection)

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

// A Patient (as a doctor) can have many ChatRooms
Doctor.hasMany(ChatRoom);

// A Patient (as a patient) can have many ChatRooms
Patient.hasMany(ChatRoom);

// A ChatRoom belongs to a Patient (as a doctor)
ChatRoom.belongsTo(Doctor);

// A ChatRoom belongs to a Patient (as a patient)
ChatRoom.belongsTo(Patient);

// A ChatRoom can have many Messages
ChatRoom.hasMany(Message);

// A Message belongs to a ChatRoom
Message.belongsTo(ChatRoom);

// connection.sync({ force: true }).then(() => console.log("Database & tables created!"))

module.exports = { Patient, Doctor, Review, Room, Appointment, Message, Service, ChatRoom };
