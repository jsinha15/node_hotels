const mongoose = require('mongoose');

//define the menu schema

const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy','bitter'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:true
    },
    ingredients:{
        type:String,
        required:true
    },
    num_sales:{
        type:Number,
        required:true,
        default:0,
    }
});

const MenuItem = mongoose.model('MenuItem',MenuSchema);
module.exports = MenuItem;
