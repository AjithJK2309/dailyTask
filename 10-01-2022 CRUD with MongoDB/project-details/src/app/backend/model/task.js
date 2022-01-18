const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        task_Name: {
            type: String
        },
        task_Details:{
            type: String
        },
        project_Name: {
            type: String
        },
        createdAt: {
            type: Date,
            message: ("Invaild date Formatt")
        }
    }
)
module.exports = mongoose.model('Task',taskSchema);