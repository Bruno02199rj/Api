
const User = require('../../models/User')


const UserController = {
    async createUser(req,res){
        
        const bodydata = req.body
    

        try{

            const newUser = await User.create(bodydata)
            
            return res.status(200).json(newUser)
        } catch(err){
            
            return res.status(400).json(err)
        }

    },

    async getUsers(req,res) {

        try{
            const users = await User.find()
            return res.status(200).json(users)
        } catch(err){
            res.status(400).json(err)
        }

    },

    async getUserById(req,res){

        const { user_id } = req.params //desestruturação

        try{

            const user = await User.findById(user_id)
            return res.status(200).json(user)
           

        } catch(err){
            return res.status(400).send(err)            
        }
    }
}



module.exports = UserController