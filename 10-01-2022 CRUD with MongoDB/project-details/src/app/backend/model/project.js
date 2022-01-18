const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        project_Name: {
            type: String
        },
        project_Details: {
            type: String
        }
    }
)
module.exports = mongoose.model('Project',projectSchema);