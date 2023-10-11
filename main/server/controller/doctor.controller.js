const { Doctor } = require("../database/model/doctor.js");
module.exports = {
  getAllDoctor: async (req, res, next) => {
    try {
      const response = await Doctor.findAll();
      res.status(200).send(response);
    } catch (error) {
      throw error;
    }
  },
  addDoctor: async (req, res, next) => {
    try {
      const doctorInfo = await Doctor.create(req.body);
      res.json({
        status: "success",
        message: "doctor added successfully!!!",
        data: doctorInfo,
      });
      res.status(201).json(doctorInfo);
    } catch (err) {
      next(err);
    }
  },
  deleleteDoctor: async (req, res, next) => {
    try {
      const response = await Doctor.destroy({ where: { id: req.params.id } });
      res.json(response);
    } catch (error) {
      throw error;
    }
  },
  updateDoctor: async (req, res, next) => {
    try {
      const response = await Doctor.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(response);
    } catch (error) {
      throw error;
    }
  }, authenticate: async (req, res, next) => {
    try {
      const doctorInfo = await Doctor.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (bcrypt.compareSync(req.body.password, doctorInfo.password)) {
        const token = jwt.sign(
          { id: doctorInfo.id },
          req.app.get("TOKEN_SECRET"),
          {
            expiresIn: "24h",
          }
        );
        res.json({
          status: "success",
          message: "doctor found!!!",
          data: { doctor: doctorInfo, token },
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
      const doctorInfo = await Doctor.findOne({
        where: {
          email: req.body.email,
        }
      })
      if (bcrypt.compareSync(req.body.currentPassword, doctorInfo.password)) {
        Doctor.update({
          name: req.body.name, lastName: req.body.lastName, email: req.body.email, adress: req.body.adress,
          password: bcrypt.hashSync(req.body.newPassword)
        }, { where: { id: doctorInfo.id } })

        res.json({
          status: "success",
          message: "doctor found!!!",
          data: { doctor: doctorInfo },
        });
      }
    } catch (error) {
      next(error);
    }

  }
};
