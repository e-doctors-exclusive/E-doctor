const sequelize = require("sequelize");

const { Message } = require("../database/index.js");

module.exports = {
  getAllMessages: async (req, res) => {
    try {
      const response = await Message.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addMessage: async (req, res) => {
    try {
      const response = await Message.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },

  deleteMessage: async (req, res) => {
    try {
      const response = await Message.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateMessage: async (req, res) => {
    try {
      const response = await Message.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
};