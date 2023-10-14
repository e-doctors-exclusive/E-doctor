const { Review } = require("../database/index");

module.exports = {
  getAllReview: async (req, res) => {
    try {
      const response = await Review.findAll({
        includes:["patient"]
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  addReview: async (req, res) => {
    try {
      const response = await Review.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      throw error;
    }
  },
  deleteReview: async (req, res) => {
    try {
      const response = await Review.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateReview: async (req, res) => {
    try {
      const response = await Review.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
 
};