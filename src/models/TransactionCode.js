const mongoose = require('mongoose')


const Schema = new mongoose.Schema({


    eltransactionCode:{
        type: String,
       
    },
    emissão:{
       type: String, default: Date
    }

   
    //criar cart code aqui e total

})

module.exports = mongoose.model('TransactionCode', Schema)