const express = require ("express")
const messageRouter = express.Router()

const {getAllMessages,addMessage,deleteMessage,updateMessage} = require("../controller/message.controller.js")


messageRouter.get("message/getAllMessages",getAllMessages)
messageRouter.post("/message/addMessage",addMessage)
messageRouter.delete("/message/deleteMessage/:id",deleteMessage)
messageRouter.put("/message/updateMessage/:id",deleteMessage)

module.exports = messageRouter 