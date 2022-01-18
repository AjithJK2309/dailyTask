const mongoose = require('mongoose');


const userSchema = mongoose.Schema ({
    
    name: {
        type: String,
        min:3
    },
    D_O_B:{
        type: Date
    },
    department: {
        type: String,
        enum: ['Development', 'Marketing', 'Designing'],
        message: '${VALUE} not an valid Department'
    },
    email: {
        type: String,
        min:6,
        max: 30,
        required: [true, "Email required"]
    },
    phone_no: {
        type: Number,
        min:7000000000,
        max:9999999999
    },
    password: {
        type: String,
        min: 6,
        max:10
    },
    role: {
        type: String,
        enum: ['Manager','Employee']
    }
})
module.exports = mongoose.model('User', userSchema);