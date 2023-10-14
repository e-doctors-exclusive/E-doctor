const sequelize = require("sequelize");

const { Appointment } = require("../database/index.js");

module.exports = {
  getAllAppoitment: async (req, res) => {
    try {
      const response = await Appointment.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },

  addAppoitment: async (req, res) => {
    try {
      const response = await Appointment.bulkCreate(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleteAppoitment: async (req, res) => {
    try {
      const response = await Appointment.destroy({
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateAppoitment: async (req, res) => {
    try {
      const response = await Appointment.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
};