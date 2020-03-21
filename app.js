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

app.get('/',function(req,res){
  
    res.render('index')
});
app.get('/signup',function(req,res){
    res.render('signup',{data:null});
});



app.post('/signup',function(req,res){
     var name=req.body.name;
     var phone=req.body.phone;
     var password=req.body.password;
   
    if(name=="" || password==""){
        res.send("place fill fields ")
        
    }else{

    const sql="INSERT INTO user_info (name,phone,password) VALUES ('"+name+"', '"+phone+"','"+password+"')";
    conn.query(sql,function(err,data){
        if(!err){
            res.send('error is ::'+err);
        }else{
            res.render('signup',{data:data})
            console.log(data);
            
           res.end();
        }
    });
}
    
});



// server createing and listening
app.listen(port,()=>{console.log('your app is running on port :'+port)});