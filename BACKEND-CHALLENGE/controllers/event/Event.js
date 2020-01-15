const Sequelize = require("sequelize");
const connection = require("../../database/database");
const User = require("../user/User");

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
User.hasMany(Event);
Event.belongsTo(User);
Event.sync({force: false});
module.exports= Event;
