const express = require("express")
const PatientRouter = express.Router()
const { getAllPatient, addPatient, deletePatient, updatePatient, authenticate } = require("../controller/patient.controller")
PatientRouter.get("/patient/getAllPatient", getAllPatient)
PatientRouter.post("/patient/authenticate", authenticate)
PatientRouter.post("/patient/addPatient", addPatient)
PatientRouter.delete("/patient/deletePatient/:id", deletePatient)
PatientRouter.put("/patient/updatePatient/:id", updatePatient)
module.exports = PatientRouter
