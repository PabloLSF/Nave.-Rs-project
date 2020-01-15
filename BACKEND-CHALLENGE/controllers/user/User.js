const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Event =require("../event/Event");
const User= connection.define('users',{
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  fone:{
    type: Sequelize.STRING,
    allowNull: false
  },
  cpf:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  },
  comment:{
    type: Sequelize.STRING,
    allowNull: false
  }
})


User.sync({force:false});

module.exports= User
