const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")

const Enrollment = sequelize.define("Enrollment",{

},{
  timestamps: false // Optional: disable timestamps if not needed
})

module.exports = Enrollment