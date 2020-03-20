const express = require('express');
const sql= require('mysql');
const app =express();
const port= 3000;


//creating database
const conn =sql.createConnection({
host: 'localhost',
user:'root',
password:'',
database:'login_info',
}).connect(()=>{console.log('database is connected !')});

// routers for api



// server createing and listening
app.listen(port,()=>{console.log('your app is running on port :'+port)});