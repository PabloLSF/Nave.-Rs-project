// modolu de conexao com o  banco  de dados
const Sequelize = require("sequelize");

const connection = new Sequelize('navdatabase','root','starcraft',{
  host:'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
});

module.exports = connection;
