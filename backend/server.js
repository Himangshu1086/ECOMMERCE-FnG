const dotenv = require("dotenv")
const express = require('express')
const app = express();


dotenv.config({path:"./config.env"});
require('./DATABASE/initDB');

app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// link the router files 
app.use(require('./ROUTER/product'))
app.use(require('./ROUTER/auth'));





const PORT = process.env.PORT

app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
})