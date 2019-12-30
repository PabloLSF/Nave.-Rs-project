//Modulo que cria a tabela deusuario comum no banco de dados;
//Candidatos podem se cadastrar (candidatos tem um nome, email, telefone e cpf).

const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Event =require("../../events/Event");
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
