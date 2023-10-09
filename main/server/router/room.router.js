const express = require("express")
const roomRouter = express.Router()

const {getAllRooms,addRoom,deleteRoom,updateRomm} = require ("../controller/room.controller.js") 



roomRouter.get("/room/getAllRooms",getAllRooms)
roomRouter.post("/room/addRoom",addRoom)
roomRouter.delete("/room/deleteRoom/:id",deleteRoom)
roomRouter.put("/room/updateRoom/:id",updateRomm)


module.exports = roomRouter