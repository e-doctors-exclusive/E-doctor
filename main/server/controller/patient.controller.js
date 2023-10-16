const { Patient } = require("../database/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  getAllPatient: async (req, res,next) => {
    try {
      const response = await Patient.findAll();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  },
  addPatient: async (req, res,next) => {
    try {
      const patientInfo = await Patient.create(req.body);
      res.json({
        status: "success",
        message: "patient added successfully!!!",
        data: patientInfo,
      });
      // res.status(201).json(patientInfo);
    } catch (err) {
      next(err);
    }
  },
  deletePatient: async (req, res,next) => {
    try {
      const response = await Patient.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (err) {
      next(err);
    }
  },
  updatePatient: async (req, res,next) => {
    try {
      const response = await Patient.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (err) {
      next(err);
    }
  },
  authenticate: async (req, res, next) => {
    try {
      const patientInfo = await Patient.findOne({
        where: {
          email: req.body.email,
        },
      })
      if (bcrypt.compareSync(req.body.password, patientInfo.password)) {
        const token = jwt.sign(
          { id: patientInfo.id },
          req.app.get("TOKEN_SECRET"),
          {
            expiresIn: "24h",
          }
        );
        res.json({
          status: "success",
          message: "patient found!!!",
          data: { patient: patientInfo, token },
        });
      } else {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: "error",
        });
      }
    } catch (err) {
      next(err);
    }
  },
  checkpassword: async (req, res, next) => {
    try {
      const patientInfo = await Patient.findOne({
        where: {
          email: req.body.email,
        }
      })
      if (bcrypt.compareSync(req.body.currentPassword, patientInfo.password)) {
        Patient.update({
          name: req.body.name, lastName: req.body.lastName, email: req.body.email, adress: req.body.adress,
          password: bcrypt.hashSync(req.body.newPassword)
        }, { where: { id: patientInfo.id } })

        res.json({
          status: "success",
          message: "patient found!!!",
          data: { patient: patientInfo },
        });
      }
    } catch (error) {
      next(error);
    }

  }
};

