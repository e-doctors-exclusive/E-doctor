const express = require("express")
 
 const doctorRouter  = express.Router()
const {getAllDoctor,addDoctor,deleleteDoctor,updateDoctor} = require("../controller/doctor.controller.js")


doctorRouter.get("/doctor/getAllDoctor",getAllDoctor)
doctorRouter.post("/doctor/addDoctor",addDoctor) 
doctorRouter.delete("/doctor/deleteDoctor/:id",deleleteDoctor)
doctorRouter.put("/doctor/updateDoctor",updateDoctor)


module.exports = doctorRouter