const express = require("express");
const session=require("express-session");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const bcrypt = require('bcryptjs');
const adminController= require("./controllers/admin/adminController");
const userController = require("./controllers/user/userController");
const Event = require("./controllers/event/Event");
const Admin = require("./controllers/admin/Admin");
const User = require("./controllers/user/User");


app.set('view engine','ejs');

app.use(session({
  secret:"sessionStart", cookie:{maxAge: 30000000000000000000000000000000},
  resave : true ,
  saveUninitialized : true
}))

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

connection
.authenticate()
.then(()=>{
  console.log("Conexão feita com sucesso!");
}).catch((error)=>{
  console.log(error);
});

app.use("/",adminController);

app.use("/",userController);

app.get("/",(req, res)=>{
  res.render("index")

});
app.get("/singin",(req, res)=>{
  res.render("login/create")

});
app.get("/login",(req, res)=>{
  res.render("login/login")

});

app.post("/authenticate",(req,res)=>{
  var email=req.body.email;
  var password =req.body.password;

  User.findOne({where:{email: email}}).then(user=>{
    if(user != undefined){
      var correct = bcrypt.compareSync(password,user.password);
      if(correct){
        req.session.user={
          id: user.id,
          email: user.email
        }
        User.findOne({where:{email: email}}).then(user=>{
          res.redirect("/user/"+user.id+"/perfil");
        });
      }else{
        res.redirect("/login");
      }
    }else{
      Admin.findOne({where:{email: email}}).then(user=>{
        if(user != undefined){
          var correct = bcrypt.compareSync(password,user.password);
          if(correct){
            req.session.user={
              id: user.id,
              email: user.email
            }

            res.redirect("/admin");

          }else{
            res.redirect("/login");
          }
        }else{

          res.redirect("/login");
        }
      })
    }
  })
})

app.listen(8080,()=>{
  console.log("O servidor está rodando!");
});
