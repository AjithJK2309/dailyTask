const express = require("express");
const router = express();
const Task = require('../model/task');
const {taskValidation} = require('../validation');
//get tasks
router.get('/getTask', async(req,res) => 
{
    try{
        const tasks = await Task.find();
        res.json(tasks)
    }catch(err)
    {
        res.status(400).json("Error "+err);
    }
})

//Create Tasks
router.post('/createTask', async(req,res) => 
{
   const {error} = taskValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
    const task = new Task(
        {
            task_Name: req.body.task_Name,
            task_Details: req.body.task_Details,
            project_Name: req.body.project_Name,
            createdAt: req.body.createdAt
        }
    )
    try {
        const taskSave = await task.save();
        res.json(taskSave);
    } catch (error) {
        res.status(400).json("Error "+error);
    }
})

//Update
router.put('/updateTask/:id', async(req,res) =>
{
    const {error} = taskValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        const task = await Task.findById(req.params.id);
        const body = req.body;
        if(body.task_Name) task.task_Name = body.task_Name;
        if(body.task_Details) task.task_Details = body.task_Details;
        if(body.project_Name) task.project_Name = body.project_Name;
        if(body.createdAt) task.createdAt = body.createdAt;
        res.json(await task.save())
    } catch (error) {
        res.status(400).json("Error "+error());
    }
})

//Delete
router.delete('/deleteTask/:id', async(req,res) => {
    try{
       await Task.deleteOne({_id:req.params.id});
       res.json(`The User With the Id ${req.params.id} was deleted`);
    }catch(err)
    {
        res.status(400).json("Error "+err)
    }
})

//Get the task based on Created Year
router.get('/getTask/gte', async(req,res) => {
    try {
        const gte = await Task.aggregate(
            [
                {$addFields: {stringDate: {$dateToString: { format: "%Y-%m-%d", date: "$createdAt"}}}},
                {$match:{"stringDate" : {$gte: "2020-01-01"}}},
                {$sort:{createdAt: +1}}
                
            ]           
        )
        res.json(gte)
    } catch (error) {
      res.status(400).send(`Error ${error}`)
    }
})

module.exports = router;