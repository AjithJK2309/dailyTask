const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');


mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true});
const con = mongoose.connection;

con.on('open' , () => {
    console.log("Connected to DataBase...");
})


app.use(express.json());

app.use(function (req, res, next) {
    const allowedOrigins = [process.env.FRONTEND_ADMIN_DOMAIN,process.env.FRONTEND_USER_DOMAIN,"http://localhost:4200", "http://localhost:4700", "http://localhost:5000"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.header("Access-Control-Allow-Origin", process.env.FRONTEND_DOMAIN);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
})

app.use(cookieParser());

app.use('/api/user', require('./routes/auth'));
app.use('/api/post', require('./routes/posts'));
app.use('/api/task',require('./routes/task'));
app.use('/api/project',require('./routes/project'));


// app.use(cors({ 	credentials : true, 	origin:'http://localhost:4200' }));
app.listen(4002, () => console.log("The server run on port 4002"));
