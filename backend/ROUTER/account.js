const express = require('express');
const router = express.Router();
require('../DATABASE/initDB');
const AddAddress = require('../MODELS/addressSchema');
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
const Order = require('../MODELS/orderSchema');
const Cart = require('../MODELS/cartSchema');
const User = require("../MODELS/userSchema");
router.use(cookieParser());




router.get("/OrdersInAccount" , async (req , res)=>{

    try{

        const userTokens = req.cookies.token;
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const order = await Order.findOne({user: verifyToken._id}).populate("products.product");
        res.status(200).json(order);

    }catch(err){
        return res.status(401).json({error:"you must logged in "});
    }
})















module.exports = router;