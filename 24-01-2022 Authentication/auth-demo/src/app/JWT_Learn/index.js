const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/post');
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open' , () => {
    console.log("Connected to DataBase...");
})
app.use(express.json());
app.use('/', require('./routes/auth'));
app.use('/api/post', postRoute);


app.listen(4001, () => console.log("The server run on port 4001"))