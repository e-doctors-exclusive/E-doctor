const express = require("express");

const chatRoomRouter = express.Router();

const {
  getChatRoom,
  addChatRoom,
  deleteChatRoom,
  updateChatRoom,
} = require("../controller/chat.controller.js");

chatRoomRouter.get("/ChatRoom/getChatRoom", getChatRoom);
chatRoomRouter.post("/ChatRoom/addChatRoom", addChatRoom);
chatRoomRouter.delete("/ChatRoom/deleteChatRoom/:id", deleteChatRoom);
chatRoomRouter.put("/ChatRoom/updateChatRoom", updateChatRoom);

module.exports = chatRoomRouter;
