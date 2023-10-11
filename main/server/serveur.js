const express = require("express")
const { createServer } = require('node:http');
const databaseConnection = require("./database/index.js")
const app = express()
app.use(express.json())
const server = createServer(app);
const port = 3000
const cors = require("cors")
const dotenv = require("dotenv")
const bodyparser = require("body-parser");
const logger = require("morgan");
var jwt = require('jsonwebtoken');
dotenv.config();
app.set("TOKEN_SECRET", `${process.env.TOKEN_SECRET}`);
app.use(logger("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
// routers import 
const userRouter = require("./router/patient.router.js")
const doctorRouter = require("./router/doctor.router.js")
const reviewRouter = require("./router/review.router.js")
const messageRouter = require("./router/message.router.js")
const roomRouter = require("./router/room.router.js")
const serviceRouter = require("./router/service.router.js")
const appointmentRouter = require("./router/appoitment.router.js")
const chatRoomRouter = require("./router/chat.router.js");
const chat = require("./database/model/chat.js");


//// routers 
app.use(cors())
app.use("/api/", userRouter)
app.use("/api/", doctorRouter)
app.use("/api/", reviewRouter)
app.use("/api/", messageRouter)
app.use("/api/", roomRouter)
app.use("/api/", serviceRouter)
app.use("/api/", appointmentRouter)
app.use("/api/", chatRoomRouter)

server.listen(3000, () => {
  console.log(`server running at ${port}`)
});
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404)
    res.status(404).json({ message: "Not found" });
  else
    res.status(500).json({ message: "Something looks wrong :( !!!" });
});