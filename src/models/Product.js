const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    productName: {
        type: String,
        
    },
    productCategory: {
        type: String,
        
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: Number,
        
    },
    productQuantity: {
        type: Number,
        
    },
    productImage: [
        {
            image:{
                type: Array,
            }
        }
    ],
    productColor: [
        {
            color:{
                type:Array,
            }
        }
    ],
    productSize: [
        {
            size: {
                type: Array,

            }
        },
    ],
   
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
})

module.exports = mongoose.model('Product', Schema)