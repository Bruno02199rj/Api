var elpayment = require('../models/Payment')

const codeController = {
  

    async getToken(req,res){
  
      try{
        const findToken = await elpayment.find()
        res.status(200).json(findToken)
      }catch(err){
          console.log(err)
      }
    }
  
  }
  
  
  
  module.exports = codeController