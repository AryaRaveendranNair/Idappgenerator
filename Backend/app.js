const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken")
const path = require('path');
const PORT = process.env.PORT || 3000

const admindata = require("./src/model/admindata.js")
const bmdata = require("./src/model/bmdata.js")
const studentdata = require("./src/model/studentdata.js")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware Fuction to verify Token send from FrontEnd
function verifyToken(req,res,next){

    if(!req.headers.authorization){
       return res.status(401).send("Unauthorized Access")
    }
    var token = req.headers.authorization.split(' ')[1];
   
   console.log(token)
   if(token == "null"){
       return res.status(401).send("Unauthorized Access")
   }

   var payload= jwt.verify(token , "secretkey")
   console.log(payload)
   if(!payload){
       return res.status(401).send("Unauthorized Access")
   }
   req.userId = payload.subject
        next()
   }


app.get("/" , (req,res)=>{
    res.send(`Server Running on PORT ${PORT}`)
});

//Register Student User//

app.post("/adduser" , (req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    console.log(req.body)

   var user ={
        studentname:req.body.data.studentname,
        email:req.body.data.email,
        gender:req.body.data.gender,
        dob:req.body.data.dob,
        username:req.body.data.username,
        password:req.body.data.password,
        course:req.body.data.course,
        batch:req.body.data.batch,
        phonenumber:req.body.data.phonenumber
      
    }
    
    var user = new studentdata(user);
    user.save();

});

//Login Student//

app.post("/login" , (req,res)=>{
   
    let logindata = req.body;
    console.log(logindata.data.username)
    uname= logindata.data.username;
    pword= logindata.data.password;
    
    if(uname==null && pword==null){
        res.send({ status: false, data: 'Invalid Username and Password' })
        }
    
    else{
        studentdata.findOne({"username":logindata.data.username , "password":logindata.data.password}).then((data)=>{
        console.log(data)  
        
        if(data===null){
            res.send({ status: false, data: 'Invalid Username and Password' })
          
        }else if(data.username === uname && data.password === pword){
            let payload = {subject:uname+pword};
            let token = jwt.sign(payload , "secretkey")
            res.send({status: true , token})
           
        }else{
             res.send({ status: false, data: 'Invalid Username and Password' })
    
        }
      })
     }
    })

//Login admin//





//Login Batch Manager//

app.listen( PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`)
})