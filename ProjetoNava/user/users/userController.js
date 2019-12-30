//Módulo de controle do usuário
//
//
//
//importando módulos Necessários
const express= require("express");
const router =express.Router();
const User = require("./User");
const bcrypt = require('bcryptjs');
const Event =require("../../events/Event");
const slugify= require("slugify");
const adminAuth= require("../../middlewares/adminAuth");

//rotas
router.post("/login/user/create",(req,res)=>{
var name = req.body.nameUser;
var fone= req.body.foneUser;
var cpf = req.body.cpfUser;
var email=req.body.emailUser;
var password =req.body.passwordUser;
var comment= "ND";

User.findOne({where:{email:email}}).then(user=>{
if(user==undefined){
   var salt =bcrypt.genSaltSync(10);//seed
  var hash =bcrypt.hashSync(password,salt);//gerando o hash
   User.create({
     name:name,
     email:email,
     fone:fone,
     cpf:cpf,
     password:hash,
     comment:comment
 }).then(()=>{
    res.redirect("/login");
 }).catch((err)=>{
       res.send(err);
    });
  }else{
 res.redirect("Email já existente");
}
  //teste de recebimento de senha
   //res.json({email, password,cpf,name,fone});
})
})


router.get("/user/logout",adminAuth,(req,res)=>{
  req.session.user=undefined;
  res.redirect("/");
})

router.get("/user/:id/perfil",adminAuth,(req,res)=>{
    var id = req.params.id;
  User.findByPk(id).then(user=>{
  res.render("user/perfil",{user:user});
});
})

router.get("/user/edit/:id",adminAuth,(req,res)=>{
    var id = req.params.id;
  User.findByPk(id).then(user=>{
  res.render("user/edit",{user:user});
});
router.post("/user/:id/update",(req,res)=>{
  var id= req.params.id;
  var name=req.body.nameUser;
  var email = req.body.emailUser;
  var fone = req.body.foneUser;
  var cpf = req.body.cpfUser;

  User.update({name:name, email:email, fone:fone, cpf:cpf},{
    where: {
      id: id
    }
  }).then(()=>{
    res.redirect("/user/"+id+"/perfil");
  }).catch(err=>{
    res.redirect("/");
  });
  })

});

router.get("/user/:id/events",adminAuth,(req,res)=>{
    var id = req.params.id;
  Event.findAll().then(events=>{
  User.findByPk(id).then(user=>{
  res.render("user/events",{user:user,events:events});
  })
});
})
router.get("/user/:id/event/:slug",adminAuth,(req,res)=>{
    var id = req.params.id;
    var slug= req.params.slug
    Event.findOne({where:{slug:slug}}).then(events=>{

  User.findByPk(id).then(user=>{

  res.render("user/viewEvent",{user:user,events:events});

  })
});
})

router.post("/user/singup/",(req,res)=>{
  var idUser=req.body.idU;
  var idEvent=req.body.idE;

  Event.update({userId:idUser},{
    where: {
      id: idEvent
    }
  }).then(()=>{
    res.redirect("/user/"+idUser+"/perfil");
  }).catch(err=>{
    res.send(err);
  });

})


router.get("/user/:id/list",adminAuth,(req,res)=>{
    var id = req.params.id;
  User.findByPk(id).then(user=>{
  Event.findAll({where:{userId:id}}).then(events=>{
  res.render("user/listEvets",{user:user,events:events});
});
});
});


//exportando módulo
module.exports = router;
