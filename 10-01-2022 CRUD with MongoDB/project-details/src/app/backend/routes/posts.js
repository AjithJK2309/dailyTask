const router = require('express').Router();
const Task = require('../model/task');
const {ROLE} = require('../model/User');
const { auth} = require('./verifyToken');
const User = require('../model/User');
const Project = require('../model/project');
const jwt = require('jsonwebtoken');
router.get('/',auth, async(req,res) => {
   // res.send(req.user);
   const tasks = await User.find();
        res.json(tasks);
})

router.get('/manager', auth, async(req,res) => {
        const manager = await User.aggregate([{$match: { role: "Manager"}}]);

        const task = await Task.find();
        if(manager.role == "Manager")
        {       
                res.json(manager);
        }else
        {
                res.status(401).send(manager);
        }
        
})

router.get('/employee',auth, async(req,res) => {
        const employee = await User.aggregate([{$match: { role: "Employee"}}]);
        res.json(employee);
})
router.get('/manager/task',auth, async(req,res) =>
{
  const token = req.header('auth-token');
  const decoded = jwt.decode(token);
//   res.json(decoded.role);
     res.cookie('token', token , {
        maxAge: 900000,
        secure: false,
        httpOnly : true
    });
  if(decoded.role == "Manager")
  {
        const task = await Task.find();
          res.json(task);
  }else
  {
          res.status(400).json("Access Denied");
  }
} )
router.get('/manager/project',auth, async(req,res) =>
{
  const token = req.header('auth-token');
  const decoded = jwt.decode(token);
//   res.json(decoded.role);
  
  if(decoded.role == "Manager")
  {
        const project = await Project.find();
          res.json(project)
  }else
  {
          res.status(400).json("Access Denied");
  }
} )
router.get('/manager/users',auth, async(req,res) =>
{
  const token = req.header('auth-token');
  const decoded = jwt.decode(token);
//   res.json(decoded.role);
  
  if(decoded.role == "Manager")
  {
        const user = await User.find();
          res.json(user);
  }else
  {
          res.status(400).json("Access Denied");
  }
} )
router.get('/employee/task',auth, async(req,res) =>
{
  const token = req.header('auth-token');
  const decoded = jwt.decode(token);
//   res.json(decoded.role);
  
  if(decoded.role == "Employee")
  {
        const task = await Task.find();
          res.json(task);
  }else
  {
          res.status(400).json("Access Denied");
  }
} )

module.exports = router;