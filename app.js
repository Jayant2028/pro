const express=require('express');
const app=express();
const mongoose=require('mongoose');
const session=require('express-session');
const passport=require('passport');

mongoose.connect('mongodb://127.0.0.1:27017/canteenDB');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized:false
}));

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
  res.locals.user=req.user;
  next();
});

app.use(require('./routes/auth'));
app.use(require('./routes/canteen'));

app.listen(3000,()=>{
  console.log("Server running on http://localhost:3000");
});