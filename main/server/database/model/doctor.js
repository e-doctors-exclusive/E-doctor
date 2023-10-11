const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
module.exports = (connection) => {
    const Doctor = connection.define("Doctor", {
        name: { type: DataTypes.STRING, allowNull: false, trim: true },
        lastName: { type: DataTypes.STRING, allowNull: false, trim: true },
        Address: { type: DataTypes.STRING, allowNull: false, trim: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true, trim: true },
        password: { type: DataTypes.STRING, allowNull: false, trim: true },
        MedicalInfo:{type:DataTypes.ENUM({values:[]}),allowNull:false,trim:true},
        rating:{type:DataTypes.STRING,allowNull:false,trim:true},
        avatar:{type:DataTypes.STRING,allowNull:false,trim:true},
        bio:{type:DataTypes.STRING,allowNull:false,trim:true}
    });
    Doctor.beforeCreate((Doctor, options) => {
        Doctor.password = bcrypt.hashSync(Doctor.password, saltRounds);
    });
    return Doctor
}