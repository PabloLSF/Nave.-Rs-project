//Módulo de event cria tebela eventsS
const Sequelize = require("sequelize");
const connection = require("../database/database");
const User = require("../user/users/User");

const Event= connection.define('events',{
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },slug:{
    type: Sequelize.STRING,
    allowNull: false
  },
  body:{
    type:Sequelize.TEXT,
    allowNull: false
  }
})

User.hasMany(Event);// tem muitos
Event.belongsTo(User);//um
Event.sync({force: false});
module.exports= Event;
