const sequelize = require("sequelize")

const {ChatRoom} = require("../database/index.js")


module.exports = {

    getChatRoom: async (req, res) => {
        try {
          const response = await ChatRoom.findAll();
          res.status(200).send(response);
        } catch (error) {
          throw error;
        }
      },
      addChatRoom: async (req, res) => {
        try {
          const response = await ChatRoom.create(req.body);
          res.status(201).json(response);
        } catch (error) {
          throw error;
        }
      },
      deleteChatRoom: async (req, res) => {
        try {
          const response = await ChatRoom.destroy({ where: { id: req.params.id } });
          res.json(response);
        } catch (error) {
          throw error;
        }
      },
      updateChatRoom: async (req, res) => {
        try {
          const response = await ChatRoom.update(req.body, {
            where: { id: req.params.id },
          });
          res.json(response);
        } catch (error) {
          throw error;
        }
      },





}