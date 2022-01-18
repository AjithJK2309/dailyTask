const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');



const {registerValidation, loginValidation} = require('../validation');
const cookieParser = require('cookie-parser');



//Get All Users
router.get('/get' ,  async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err)
    {
        res.status(400).json("Error "+err);
    }
})




//Create User
router.post('/Create',  async(req,res) => {
   // Lets Validate the data before the user
   const {error} = registerValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);

   //Check Email
   const emailExist = await User.findOne({email: req.body.email});
   if(emailExist) return res.status(400).send('Email already Exists');
   
   //HashPasswords
   const salt = await bcrypt.genSalt(10);
   const hashPasswords = await bcrypt.hash(req.body.password, salt); 

   //Create new User
    const user = new User(
        {
            name: req.body.name,
            D_O_B: req.body.D_O_B,
            department: req.body.department,
            email: req.body.email,
            phone_no: req.body.phone_no,
            password: hashPasswords,
            role: req.body.role
        }
    )
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err)
    {
        res.status(400).json('Error '+err);
    }

})

//Delete
router.delete('/Delete/:id', async(req,res) => {
    try{
       await User.deleteOne({_id:req.params.id});
       res.json(`The User With the Id ${req.params.id} was deleted`);
    }catch(err)
    {
        res.status(400).json("Error "+err)
    }
})

//login
router.post('/login', async(req,res) => {
    // Lets Validate the data before the user
   const {error} = loginValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   //Check Email
   const user = await User.findOne({email: req.body.email});
   if(!user) return res.status(400).send('Not Registred Email');console.log('success')
   //Password is correct
   const vaildPass = await bcrypt.compare(req.body.password, user.password);
   if(!vaildPass) return res.status(400).send('Invalid Password');

    //Create and assign a token
    const token = jwt.sign({role: user.role}, process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);
    res.cookie('token', token , {
        maxAge: 1000*60*60,
        httpOnly : false,
    }).json({success: true , data: token});
    
    
   
})

 

module.exports = router;