const sequelize = require("sequelize");
const { User } = require("../database/index");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const response = await User.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addUser: async (req, res) => {
    try {
      const response = await User.create(req.body);
      res.status(201).json(response);
    } catch (error) {
console.log(error);    }
  },
  deleteUser: async (req, res) => {
    try {
      const response = await User.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (req, res) => {
    try {
      const response = await User.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
console.log(error);    }
  },
};
