const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/user');

// register page
router.get('/register',(req,res)=>{
  res.render('auth/register');
});

// register
router.post('/register',async(req,res)=>{
  try{
    let data = {...req.body};

    delete data.isFaculty;   // ❌ remove "on" completely

    const user = new User({
      ...data,
      isFaculty: req.body.isFaculty ? true : false   // ✅ clean boolean
    });

    await user.save();
    res.redirect('/login');

  }catch(err){
    console.log(err);
    res.send("Error in registration");
  }
});

// login p
router.get('/login',(req,res)=>{
  res.render('auth/login');
});
// login
router.post('/login',
  passport.authenticate('local',{
    successRedirect:'/canteen',
    failureRedirect:'/login'
  })
);

module.exports=router;