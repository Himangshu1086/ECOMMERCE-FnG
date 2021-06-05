const dotenv = require("dotenv")
const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

dotenv.config({path:"./config.env"});
require('./DATABASE/initDB');


// link the router files 
app.use(require('./ROUTER/product'))
app.use(require('./ROUTER/auth'));
app.use(require("./ROUTER/cart"));





const PORT = process.env.PORT

app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
})