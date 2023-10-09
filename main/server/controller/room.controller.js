const sequelize = require("sequelize");
const { Room } = require("../database/index.js");

module.exports = {
  getAllRooms: async (req, res) => {
    try {
      const response = await Room.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addRoom: async (req, res) => {
    try {
      const response = await Room.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleteRoom: async (req, res) => {
    try {
      const response = await Room.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateRomm: async (req, res) => {
    try {
      const response = await Room.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
};
