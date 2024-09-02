const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

mongoose.connect("mongodb://0.0.0.0:27017/mongoConnect").then(()=>{
    console.log("Database Connected");
}).catch(()=>{
    console.log("Connection Failed");
})
const mongoSchema = mongoose.Schema({
    name: String,
    email: String,
    salary: Number,
    joiningYear: Number,
    password: String
});
const modelConnect = mongoose.model("Employee",mongoSchema);
// app.use(express.urlencoded({ extended: true }));

app.use(express.json())        // middleware to read payload


app.get('/',(req, res) => {
  
    res.end("Hello");
  });
  app.post("/register", 
  async (req,res)=>{
    //console.log(req);
    const data = await modelConnect.findOne({ email: req.body.email });
    if(data){
        res.end("Already Exist");
    }
    else{
        await modelConnect.create({
            name : req.body.name,
            email : req.body.email,
            salary : req.body.salary,
            joiningYear : req.body.joiningYear,
            password : await bcrypt.hash(req.body.password,8)
        });
        res.end("Register Successfully");
    }
  });

  app.post("/login",async (req,res)=>{
    const email = req.body.email;
    const data =await modelConnect.findOne({email:email});
    if(data){
        const password = req.body.password;
        const decryptPassword = await bcrypt.compare(req.body.password, data.password);
        if(decryptPassword){
        const id = data._id.toString();
        const createToken = jwt.sign({ id: id }, "AnuragKey");
        console.log("Create Token",createToken);
        res.json({"userData":data,token:createToken});
        }
        else {
        res.send("Please Provide Correct Password!!!!");
        }
    }
  })

app.listen(3423, () => {
    console.log("Server is running 3423");
  })