const express = require("express");
const { Schema } = require("mongoose");
const { auth} = require('./verifyToken');
const router = express();
const Project = require('../model/project');
const {projectValidation} = require('../validation');

//get projects
router.get('/getProject',  async(req,res) => 
{
    try{
        const project = await Project.find();
        res.json(project)
    }catch(err)
    {
        res.status(400).json("Error "+err);
    }
})

//Create Tasks
router.post('/createProject', async(req,res) => 
{
   const {error} = projectValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
    const project = new Project(
        {
            project_Name: req.body.project_Name,
            project_Details: req.body.project_Details
        }
    )
    try {
        const prjSave = await project.save();
        res.json(prjSave);
    } catch (error) {
        res.status(400).json("Error " + error);
    }
})
//Update
router.put('/updateProject/:id', async(req,res) =>
{
   const {error} = projectValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
    try {
        const project = await Project.findById(req.params.id);
        const body = req.body;
        if(body.project_Name) project.project_Name = body.project_Name;
        if(body.project_Details) project.project_Details = body.project_Details;
        res.json(await project.save())
    } catch (error) {
        res.status(400).json("Error "+error());
    }
})
//Delete
router.delete('/deleteProject/:id',  async(req,res) => {
    try{
       await Project.deleteOne({_id:req.params.id});
       res.json(`The User With the Id ${req.params.id} was deleted`);
    }catch(err)
    {
        res.status(400).json("Error "+err)
    }
})
module.exports = router;