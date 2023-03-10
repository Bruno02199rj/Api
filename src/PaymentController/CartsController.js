const Cart = require('../Paymodels/elcart')

const CartsController = {

    async index(req,res){

        try{

            const carts = await Cart.find()
            return res.status(200).json(carts)
        }catch(err){
            console.log(err)
            return res.status(500).json({error: 'err'})
        }   

        
    },

    async create(req, res){
        try{
            const { code, price } = req.body

            const cart = await Cart.create({ code, price })
            return res.status(201).json(cart)
        }catch (err){
            console.log(err  +'handle err')
            return res.status(500).json({error: 'err'})
        }
    },

    async update(req, res) {

        try{
            const {id} = req.params
            const { code, price} = req.body
            const cart = await Cart.findById(id)

            if(!cart){
                res.status(404).json()
            }

            await cart.updateOne({ code , price})
            return res.status(200).json()

        }catch(err){
            console.log(err  +'handle err')
            return res.status(500).json({error: 'err'})
        }
    },

    async destroy(req, res){

        try{
            const { id } = req.params
            const cart = Cart.findById(id)

            if(!cart){
                res.status(404).json()
            }

            await cart.deleteOne()
            return res.status(200).json()
        }catch(err){
            console.log(err  +'handle err')
            return res.status(500).json({error: 'err'})
        }
    }
}

module.exports = CartsController