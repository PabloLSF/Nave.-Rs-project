const express= require("express");
const router =express.Router();
const Admin = require("./Admin");
const bcrypt = require('bcryptjs');
const Event =require("../event/Event");
const User = require("../user/User");
const slugify= require("slugify");
const adminAuth= require("../../middlewares/adminAuth")


router.post("/login/admin/create",(req,res)=>{
  var email=req.body.emailAdmin;
  var password =req.body.passwordAdmin;

  Admin.findOne({where:{email:email}}).then(admin=>{
    if(admin==undefined){
      var salt =bcrypt.genSaltSync(10);
      var hash =bcrypt.hashSync(password,salt);
      Admin.create({
        email:email,
        password:hash
      }).then(()=>{
        res.redirect("/");
      }).catch((err)=>{
        res.redirect(err);
      });
    }else{
      res.redirect("/");
    }
  })
});

router.get("/admin/user",adminAuth,(req,res)=>{
  User.findAll().then(users=>{
    res.render("admin/listUser",{users:users});
  })
})


router.get("/admin/logout",adminAuth,(req,res)=>{
  req.session.user=undefined;
  res.redirect("/");
})
router.get("/admin",adminAuth,(req,res)=>{
  Event.findAll().then(events=>{
    res.render("admin/index",{events:events});
  })
});
router.get("/admin/event/new",adminAuth,(req,res)=>{
  res.render("admin/newEvent")
});

router.post("/admin/event/save",(req, res)=>{
  var title= req.body.title;
  var body =req.body.body;
  var category = req.body.category;

  Event.create({
    title: title,
    slug: slugify(title),
    body: body

  }).then(()=>{
    res.redirect("/admin");
  })
});

router.get("/admin/event/edit/:id",adminAuth,(req, res)=>{
  var id = req.params.id;
  Event.findByPk(id).then(event=>{
    if(event != undefined){
      User.findAll().then(users =>{
        res.render("admin/editEvent",{event:event, users:users})
      })
    }else{
      res.redirect("/admin");
    }
  }).catch(err=>{
    res.redirect(err);
  })
});

router.post("/admin/event/update",(req, res)=>{
  var id= req.body.id;
  var title=req.body.title;
  var body = req.body.body;

  Event.update({title:title, body:body, slug:slugify(title)},{
    where: {
      id: id
    }
  }).then(()=>{
    res.redirect("/admin/");
  }).catch(err=>{
    res.redirect(err);
  });
});

router.post("/admin/delete/event",(req, res)=>{
  var id=req.body.id;
  if(id != undefined){
    if(!isNaN(id)){
      Event.destroy({
        where:{
          id : id
        }
      }).then(()=>{
        res.redirect("/admin");
      });
    }else{
      res.redirect("/admin");
    }
  }else{
    res.redirect("/admin");
  }
});



router.get("/admin/edit/user/:id",adminAuth,(req, res)=>{
  var id = req.params.id;
  User.findByPk(id).then(user=>{
    if(user != undefined){

      res.render("admin/editUser",{user:user})

    }else{
      res.redirect("/admin/user");
    }
  }).catch(err=>{
    res.redirect(err);
  })
});


router.post("/admin/user/update",(req, res)=>{
  var id= req.body.id;
  var comment=req.body.comment;

  User.update({comment:comment},{
    where: {
      id: id
    }
  }).then(()=>{
    res.redirect("/admin/user");
  }).catch(err=>{
    res.redirect(err);
  });
});

router.get("/admin/event/view/:id",adminAuth,(req,res)=>{
  var id=req.params.id;
  Event.findByPk(id).then(event=>{

    res.render("admin/eventView",{event:event})

  });
})

router.get("/admin/view/user/:id",adminAuth,(req,res)=>{
  var id=req.params.id;
  User.findByPk(id).then(user=>{
    Event.findAll({where:{userId:id}}).then(events=>{
      res.render("admin/useView",{user:user,events:events})

    });
  });
});

module.exports = router;
