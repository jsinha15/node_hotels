const mongoose = require('mongoose');

//define the person schema

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }
});

//create a model from schema

const Person = mongoose.model('Person',PersonSchema);

module.exports = Person;