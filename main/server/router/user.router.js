const express = require("express") 
const userRouter = express.Router()
const {getAllUser,addUser,deleteUser,updateUser} = require("../controller/user.controller")

userRouter.get("/user/getAllUser",getAllUser)
userRouter.post("/user/addUser",addUser)
userRouter.delete("/user/deleteUser/:id",deleteUser)
userRouter.put("/user/updateUser/:id",updateUser)

module.exports = userRouter
