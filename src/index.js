const express  = require("express")
const path = require('path')
const app = express()
const cors = require('cors')

const bodyParser = require("body-parser");
var mongoose = require('mongoose')

require('dotenv').config()



const routes = require('./routes')



app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());



app.use(cors())
app.use(routes)


routes.use(express.static(path.join(__dirname, 'build')))


routes.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'build' , 'index.html'))
})


mongoose.connect('mongodb+srv://root:pwToB2b4dsAikjqZ@cluster0.fmf1cmw.mongodb.net/Lotus?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('conectado database')
}).catch((err)=>{
    console.log(err.message)
    
})


app.listen(3001, () =>{
    console.log('rodando')
});