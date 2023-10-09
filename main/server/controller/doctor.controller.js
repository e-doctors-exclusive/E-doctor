const { Doctor } = require("../database/model/doctor.js");
module.exports = {
  getAllDoctor: async (req, res) => {
    try {
      const response = await Doctor.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addDoctor: async (req, res) => {
    try {
      const response = await Doctor.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleleteDoctor: async (req, res) => {
    try {
      const response = await Doctor.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateDoctor: async (req, res) => {
    try {
      const response = await Doctor.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
};
