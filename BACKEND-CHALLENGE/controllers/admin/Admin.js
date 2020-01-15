const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Admin= connection.define('admins',{

  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  }
})
Admin.sync({force:false});

module.exports= Admin
