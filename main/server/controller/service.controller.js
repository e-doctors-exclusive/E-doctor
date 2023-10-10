const sequelize = require("sequelize");

const { Service } = require("../database/index.js");

module.exports = {
  getAllServices: async (req, res) => {
    try {
      const response = await Service.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addService: async (req, res) => {
    try {
      const response = await Service.create(req.body);
      res.status(201).send(response);
    } catch (error) {
      throw error;
    }
  },

  deleteService: async (req, res) => {
    try {
      const response = await Service.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateService: async (req, res) => {
    try {
      const response = await Service.update(req.body, {
        where: { id: req.params.id },
      });
    } catch (error) {
      throw error;
    }
  },
};
