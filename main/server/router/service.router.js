const express = require("express")

const serviceRouter = express.Router()

const {getAllServices,addService,deleteService,updateService} = require("../controller/service.controller.js")

serviceRouter.get("/service/getAllservices",getAllServices)
serviceRouter.post("/service/addService",addService)
serviceRouter.delete("/service/deleteService/:id",deleteService)
serviceRouter.put("/service/updateService/:id",updateService)

module.exports = serviceRouter
