const express = require('express');
const router = express.Router();
const Razorpay = require("razorpay");
const shortid = require('shortid')
require('../DATABASE/initDB');
const AddAddress = require('../MODELS/addressSchema');
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
const Order = require('../MODELS/orderSchema');
const Cart = require('../MODELS/cartSchema')
router.use(cookieParser());



router.post("/checkout/orders" , async(req ,res)=>{
    const {price , delivery , addedProducts} = req.body;
    if (!price || !delivery || !addedProducts )
   {
       return res.status(422).json({error:"Some error occured"})
   }
    console.log(req.body);
     try{
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const payment_capture = 1;
        const amount = price;

        const options = {
            amount: amount*100 ,
            currency:"INR" ,
            receipt : shortid.generate() , 
            payment_capture 
        };
    

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");
        console.log(order);
        const id = order.id;
        res.json({
            id:order.id,
            currency: order.currency,
            amount:order.amount
        });

        const userTokens = req.cookies.token;
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const AddOrder = await new Order({ user:verifyToken._id ,  totalPrice:price , address:delivery , products:addedProducts ,  orderId:id  });
        await AddOrder.save(); 
       

        await Cart.findOneAndUpdate({user:verifyToken._id},{$set:{products:[]}});
        res.status(200).json({ message:"user registered successfully" })
        

    }
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
})






router.post('/address', async (req , res )=>{
    const userTokens = req.cookies.token;

    const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);

    const {Uname,Mobile,Town,HouseNo,Address,pin,Landmark } = req.body;

   if (!Uname || !Mobile || !Town  ||  !HouseNo || !Address || !pin  ||  !Landmark)
   {
       return res.status(422).json({error:"plz fill the details"})
   }

   try{
       const addresses = {name:Uname , town:Town , address:Address , houseNo:HouseNo ,phNumber:Mobile , pin:pin ,  landmark:Landmark};
           const address = new AddAddress({   
               user:verifyToken._id,
                addresses:addresses} );
           await address.save();
           res.status(200).json({ message:" Address added successfully" })
   
   }catch (err){
       console.log(err)
   }
})



router.get('/address' , async (req , res)=>{
    console.log("ok")
    try{
        const userTokens = req.cookies.token;
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const addresses = await AddAddress.findOne({user:verifyToken._id});
        res.status(200).json(addresses);
    }catch(err){
        console.log(err);
    }
        
})







module.exports = router;