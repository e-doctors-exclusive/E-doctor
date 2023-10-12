const express = require("express")
 
 const doctorRouter  = express.Router()
const {getAllDoctor,addDoctor,deleleteDoctor,updateDoctor, authenticate} = require("../controller/doctor.controller.js")


doctorRouter.get("/doctor/getAllDoctor",getAllDoctor)
doctorRouter.post("/doctor/addDoctor",addDoctor) 
doctorRouter.post("/doctor/authenticate",authenticate) 
doctorRouter.delete("/doctor/deleteDoctor/:id",deleleteDoctor)
doctorRouter.put("/doctor/updateDoctor/:id",updateDoctor)


module.exports = doctorRouter