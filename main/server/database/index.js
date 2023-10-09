const { Sequelize } = require("sequelize");
const saltRounds = 10;
const UserModel = require("./model/user.js")
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

const User = UserModel(connection)
const Doctor = DoctorModel(connection)
const Review = ReviewModel(connection)
const Room = RoomModel(connection)
const Appointment = AppointmentModel(connection)
const Message =MessageModel(connection)
const Service =ServiceModel(connection)
const Chat = ChatModel(connection)

// A User can have many Reviews, Appointments, and Messages
User.hasMany(Review);
User.hasMany(Appointment);
User.hasMany(Message);

// A Doctor can have many Reviews, Appointments, Rooms, Messages, and Services
Doctor.hasMany(Review);
Doctor.hasMany(Appointment);
Doctor.hasMany(Room);
Doctor.hasMany(Message);
Doctor.hasMany(Service);

// A Review belongs to a User and a Doctor
Review.belongsTo(User);
Review.belongsTo(Doctor);

// An Appointment belongs to a User, a Doctor, and a Room
Appointment.belongsTo(User);
Appointment.belongsTo(Doctor);
Appointment.belongsTo(Room);

// A Room belongs to a Doctor and has many Appointments
Room.belongsTo(Doctor);
Room.hasMany(Appointment);

// A Message belongs to a User (as sender) and a Doctor (as receiver)
Message.belongsTo(User);
Message.belongsTo(Doctor);

// A Service belongs to a Doctor
Service.belongsTo(Doctor);

// A User (as a doctor) can have many Chats
Doctor.hasMany(Chat);

// A User (as a patient) can have many Chats
User.hasMany(Chat);

// A Chat belongs to a User (as a doctor)
Chat.belongsTo(Doctor);

// A Chat belongs to a User (as a patient)
Chat.belongsTo(User);

// A Chat can have many Messages
Chat.hasMany(Message);

// A Message belongs to a Chat
Message.belongsTo(Chat);

// connection.sync({force:true}).then(() => console.log("Database & tables created!"))

module.exports = { User, Doctor, Review, Room, Appointment,Message,Service,Chat };
