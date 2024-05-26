/*
const notes = require('./notes.js');
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt','HEEYYY'+ user.username + '!\n',()=>{
    console.log('file is created');
});

var age = notes.age;
var addNumber = notes.addNumber(5,6);

console.log(age);
console.log(addNumber);


const jsonString = '{"name":"Andrew","planet":"Earth","age":27}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof jsonObject);

const objecttoconvert = {name:"alice",age:28};
const jsonStringified = JSON.stringify(objecttoconvert);
console.log(jsonStringified);
console.log(typeof jsonStringified);

*/

//API & endpoint- API is a set of tools for building software applications. It stands for Application Programming Interface. An endpoint is one URL in a web API. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

//create a server

// express js

const express = require("express");
const app = express();
const db = require("./db");

require("dotenv").config();

const bodyparser = require("body-parser");
app.use(bodyparser.json()); // req.body

const PORT = process.env.PORT || 3000;

//methods to share data
// GET , POST ,  PATCH  , DELETE
// -> GET : u can get data from server, dont change anything , browser sends  GET request for the webpage

app.get("/", (req, res) => {
  res.send("hello world");
});

/*
app.get('/about',(req,res)=> {
    res.send('about page')
})

app.get('/contact',(req,res)=> {
    const data = {
        name:'Alice',
        age:28
    }
    res.send(data);
})

app.post('/person',(req,res)=>{
    res.send('POST request to the homepage');
})



*/

// call back function
// we dont use this anymore

/*
app.post('/person',(req,res)=>{
    const personData = req.body;
    const newPerson = new Person(personData);

    newPerson.save((error,savedPerson) =>{
        if(error){
            console.log('Error:',error);
            res.status(500).json({error:'internal server error'});
        }
        else{
            console.log('data saved successfully');
            res.status(201).json(savedPerson);
        }
    })
})

*/

// UPDATE - PUT/PATCH

//DELETE - DELETE

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/MenuItemRoutes");
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log("server is listening on port 3000");
});

// node.js handles HTTP rqsts from clients and return responses ,
