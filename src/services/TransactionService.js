const Cart = require('../Paymodels/elcart')
const { v4: uuidv4 } = require('uuid');
const Transaction = require('../Paymodels/Transaction')

const TransactionService = {

   

    async process({
        cartCode,
        paymentType,
        installments,
        customer,
        billing,
        creditCard,
    }){
        const cart = await Cart.findOne({ code: cartCode })

        if(!cart){ 
            throw `Cart ${cartCode} was not found.`
        }
  
        const transaction = await Transaction.create({
            cartCode: cart.code,
            code: await uuidv4(),
            total: cart.price,
            paymentType,
            installments,
            status: "started",
            customerName: customer.name,
            customerEmail: customer.email, 
            customerMobile: customer.mobile,  
            customerDocument: customer.document,  
            billingAddress: billing.address,
            billingNumber: billing.number,
            billingNeighborhood: billing.neighborhood,
            billingCity: billing.city,
            billingState: billing.state,
            billingZipCode: billing.zipcode,
        })

     
        return transaction
    }
}

module.exports = TransactionService