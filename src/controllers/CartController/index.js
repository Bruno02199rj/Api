const Cart = require('../../models/Cart')
const { v4: uuidv4 } = require('uuid');
const { db } = require('../../models/Cart');
const TransactionCode = require('../../models/TransactionCode');


const CartController = {

    async createCart(req, res) {

        const bodyData = req.body
        const {transaction } = req.body
        const { user_id, cartCode } = req.params
        console.log(bodyData)
        try {

            const createdCart = await Cart.create({ ...bodyData, username: user_id, },)

            await createdCart.populate('products')

            createdCart.CartCode = await uuidv4()

            //somar os produtos
            return res.status(200).json(createdCart)

        } catch (err) {

            res.status(400).json(err + '  here create')
        }

    },

    async delete(req, res) {

        const { _id } = req.params

        try {

        const cart = await Cart.findByIdAndDelete({ _id }).populate('products')

            return res.status(200).json(cart)
        } catch (err) {

            res.status(400).json(err + 'here')
        }

    },
    async getCart(req, res) {

        const { _id } = req.params


        try {


            const cart = await Cart.findById({ _id }).populate('products')




            return res.status(200).json(cart)
        } catch (err) {

            res.status(400).json(err + 'here')
        }

    },

    async getAllCarts(req,res){
       const allcarts = await Cart.find()
        try {
            return res.status(200).json(allcarts)
        } catch (error) {
            console.log(error)
        }
    },
    async getTransCode(req,res){
        const {eltransactionCode} = req.body
        const check = await TransactionCode.create({eltransactionCode})
        try {
            return res.status(200).json(check)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllTransCode(req,res){
        const allcodes = await TransactionCode.find()
        try {
            return res.status(200).json(allcodes)
        } catch (error) {
            
        }
    }


}

module.exports = CartController