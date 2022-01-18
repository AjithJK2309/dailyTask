//validation
const Joi = require('@hapi/joi');

//User Validation
const registerValidation = (data) => {
    const schema = {
        name: Joi.string().min(3).required(),
        D_O_B: Joi.date().required(),
        department: Joi.string().valid('Development', 'Marketing', 'Designing').required(),
        email: Joi.string().required().email(),
        phone_no: Joi.number().min(10).required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('Manager','Employee').required()
    }
    return Joi.validate(data, schema);
}
//Login Validation
const loginValidation = (data) => {
    const schema = {  
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(data, schema);
}


//project validation
const taskValidation = (data) => {
    const schema = {
        task_Name: Joi.string().min(4),
        task_Details: Joi.string().min(5),
        project_Name: Joi.string().min(4),
        createdAt: Joi.date()
    }
    return Joi.validate(data, schema);
}

//task validation
const projectValidation = (data) => {
    const schema = {
        project_Name: Joi.string().min(4),
        project_Details: Joi.string().min(5)
    }
    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;

module.exports.taskValidation = taskValidation;

module.exports.projectValidation = projectValidation;