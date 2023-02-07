const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
    {
    
    code:{
        type: String,
        required: true,
        unique: true,
    },
    price:{
     type: Number,
     required: true,
    },
  
    },
    {
        timestamps: true,

    }
) 

module.exports = mongoose.model('elcart', Schema)