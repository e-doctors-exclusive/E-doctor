const express = require("express") 

const appointmentRouter = express.Router()


const {getAllAppoitment,addAppoitment,deleteAppoitment,updateAppoitment} = require("../controller/appoitment.controller.js")


appointmentRouter.get("/appointment/getAllappointments",getAllAppoitment)
appointmentRouter.post("/appointment/addAppointment",addAppoitment)
appointmentRouter.delete("appointment/deleteAppointment/:id",deleteAppoitment)
appointmentRouter.put("/appointment/updateAppointment/:id",updateAppoitment)


module.exports = appointmentRouter
