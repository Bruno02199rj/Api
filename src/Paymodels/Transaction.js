const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
    {
    
    cartCode: {
        type: String,
        required: true,
        unique: true,
    },
    code:{
     type: String,
     required: true,
    },
    status:{
        type: String,
        enum: ["started", "processing", "pending", "approved", "refused", "refunded", "chargeback", "error"  ],
        required: true
    },
    paymentType:{
        type: String,
        enum: ["billet", "credit_card"],
        required: true
    },
    installments: {
        type: Number,
     },
     total:{
        type:Number,
     },
     transactionId:{
        type: String,
     },
     processorResponse:{
        type: String,
     },
     customerEmail:{
        type: String
     },
     customerName:{
        type: String
     },
     customerMobile:{
        type: String
     },
     customerDocument:{
        type: String
     },
     billingAddress:{
        type:String
     },
     billingNumber:{
        type: String
     },
     billingNeighborhood:{
        type: String
     },
     billingCity:{
        type: String
     },
     billingState:{
        type: String
     },
     billingZipCode:{
        type:String
     },

    
    },
      {
        timestamps: true,

    }
) 

module.exports = mongoose.model('Transaction', Schema)