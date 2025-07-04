const {DataTypes} = require("sequelize")
const sequelize =require("../config/db")

const Course = sequelize.define("Course",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    instructor:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Course