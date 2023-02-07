const Product = require('../../models/Product')



const ProductController = {

    async createProduct(req,res){

        const bodyData = req.body
        const { user_id } = req.params
       
        try{
            const data = {username: user_id, ...bodyData} //empty bodydata


            
            const newProduct =  await Product.create(data) 
            await newProduct.populate('username')
        
            return res.status(200).send(newProduct)
        } catch(err){
            res.status(400).send(err)
        }
    },

    async getUsersProducts(req,res){

        const {user_id} = req.params

        try{
            const productsOfAnUser = await Product.find({username: user_id})
            res.status(200).json(productsOfAnUser)
        } catch(err){
            res.status(400).send(err)
        }
    },

    async updateProduct(req,res){
      
        const bodyData = req.body
        const { product_id, user_id } = req.params

        try{

            const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true})

            return res.status(200).json(updateProduct)

        } catch(err){
            res.status(400).send(err)
        }
    },

    async deleteProduct(req,res){

        const {product_id, user_id} = req.params

        try{
        
            const deletedProduct = await Product.findByIdAndDelete(product_id)

            return res.status(200).json(deletedProduct)

        } catch(err){
            res.status(400).send(err)
        }
    },

    async getProducts(req,res){
        try{

            const products = await Product.find()
            return res.status(200).json(products)

        } catch(err){
            res.status(400).send(err)
        }
    },

    async getProductsById(req,res){
       const { product_id } = req.params
       
        try{
            
            const product = await Product.findById(product_id)
            return res.status(200).json(product)


        } catch(err){
            res.status(400).send(err)
        }
    }
}

module.exports = ProductController