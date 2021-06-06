const express = require('express');
const router = express.Router();
const Razorpay = require("razorpay");
const shortid = require('shortid')
require('../DATABASE/initDB');


router.post("/checkout/orders" , async(req ,res)=>{
    console.log("ok")
     try{
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const payment_capture = 1;
        const amount = 500;

        const options = {
            amount: amount*100 ,
            currency:"INR" ,
            receipt : shortid.generate() , 
            payment_capture 
        };
    

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");
console.log(order);
        res.json({
            id:order.id,
            currency: order.currency,
            amount:order.amount
        });

    }
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
})


module.exports = router;