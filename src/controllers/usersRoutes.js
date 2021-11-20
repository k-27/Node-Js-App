const User =require('../models/User')
const { validationResult } = require('express-validator')

const addUserForm = (req, res) => {
   res.render('form');
};

const addUser = async (req, res) => {
  const validation = validationResult(req)
    if(validation.errors.length==0){
      let alert=[];
      const isUserExist = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      console.log(isUserExist)
      if(isUserExist){
        console.log("user Exists")
        alert.push({
          msg: 'User already Exists! Please try with a new Email'
        });
      }else{
       const user = new User({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         phone: req.body.phone,
         about: req.body.introduction,
         experience: req.body.experience,
         achievements: req.body.achievements,
       });
       await user.save();
       alert.push({
        msg: 'User added!'
       })
      }
      res.render('form', {alert})
      
    }else{
      res.render('form', {alert: validation.errors})
    }    
};

 const viewUserDetails = async (req, res) => {   
 console.log(req.params.id)
   const user = await User.findOne({
     where : {
       id: req.params.id
     }
   });
  if(user){
    res.render('userDetails', {user})
  }
};

const viewAllUsers = async (req, res) => {
   const users = await User.findAll();
   console.log(users)
   res.render('userList', {users: users});
};

module.exports = {
    addUserForm, 
    addUser, 
    viewUserDetails,
    viewAllUsers
  };