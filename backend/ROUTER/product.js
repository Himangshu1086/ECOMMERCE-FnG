const express = require('express')
const routes = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
require('../DATABASE/initDB');
const Product = require('../MODELS/productSchema');
// routes.use(cookieParser());




routes.post("/productToDB" , async (res  , req ) =>{

const { productName , MRP , DiscountPrice , DeliveryCharge , availableQuantity , description , image } =  req.body;
console.log(req.body);
try{
    const items =  new Product({productName , MRP , DiscountPrice , DeliveryCharge , availableQuantity , description , image});
    await items.save();
    res.status(200).json({ message:"user registered successfully" })

}catch(err){
    console.log(err);
}

})


routes.get("/products",async (req , res)=>{

        res.send("product")
})



module.exports = routes;