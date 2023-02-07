const mongoose = require('mongoose')
const { number, ref } = require('yup')

const Schema = new mongoose.Schema({

    
    code: {

        type: String
      

    }
   


  
    //criar cart code aqui e total
    
})

module.exports = mongoose.model('Payment', Schema)