
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User  = require('../Model/User');
const { registerValidation, loginValidation } = require('../validation');



//get Values
router.get('/getUsers', async(req,res) => {
    try{
        const users = await User.find();
        res.json(users); 
    }catch(err)
    {
        res.status(400).json(`Error ${err}`);
    }
})

    //Create new User
    router.post('/register', async(req,res) => {

    //Lets validate the data before a user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking user already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //hash Passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    //Create new User
    const user  = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try {
        const saveduser = await user.save();
        res.json(saveduser);

    }catch(err)
    {
        res.status(400).json(`Error ${err}`)
    }
});

//Login
router.post('/login' , async(req,res) => {
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //checking if the email exists
    const user  = await User.findOne({ email: req.body.email});
    if(!user) return res.status(400).send("Email is not Found");
    //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send("Not an valid Password");
    
    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    console.log(token)
    res.header('auth-token', token).json(token);
   
})






module.exports = router;