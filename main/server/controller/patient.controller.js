const sequelize = require("sequelize");
const { Patient } = require("../database/index");

module.exports = {
  getAllPatient: async (req, res) => {
    try {
      const response = await Patient.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addPatient: async (req, res) => {
    try {
      const response = await Patient.create(req.body);
      res.status(201).json(response);
    } catch (error) {
console.log(error);    }
  },
  deletePatient: async (req, res) => {
    try {
      const response = await Patient.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updatePatient: async (req, res) => {
    try {
      const response = await Patient.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
console.log(error);    }
  },
};
