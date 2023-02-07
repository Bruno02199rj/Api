
const { Router } = require('express');

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const { } = require('../middlewares');
const CartsController = require('../controllers/CartController');

const providerController = require('../PagseguroProvider/Pagseg');
const codeController = require('../PagseguroProvider/CodeController');

const routes = Router();

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)
routes.post('/sessions', SessionController.createSession)
routes.post('/products/:user_id',ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUsersProducts)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id',ProductController.deleteProduct)
routes.get('/products', ProductController.getProducts)

routes.get('/products/:product_id', ProductController.getProductsById)
routes.post('/carts', CartsController.createCart)
routes.get('/carts/:_id', CartController.getCart)
routes.get('/allcarts', CartController.getAllCarts)
routes.post('/transcode', CartController.getTransCode)
routes.get('/allcodes', CartController.getAllTransCode)
routes.delete('/carts/:_id', CartController.delete)
routes.get('/transaction/:_id', providerController.get)



module.exports = routes 