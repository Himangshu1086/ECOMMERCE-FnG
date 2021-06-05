const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());

const jwt = require("jsonwebtoken");


require('../DATABASE/initDB');
const  Cart = require("../MODELS/cartSchema");


// GET REQUEST FOR THE ADD TO CART PRODUCTS

router.get("/cart" , async (req , res)=>{

    try{

        const userTokens = req.cookies.token;
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const cart = await Cart.findOne({user: verifyToken._id}).populate("products.product");
        res.status(200).json(cart.products);

    }catch(err){
        return res.status(401).json({error:"you must logged in "});
    }
})


router.put("/cart" , async(req , res)=>{

    try{
        const {quantity  , productId} = req.body;
        const userTokens = req.cookies.token;
       // console.log(`the cookie req ${userTokens}`);
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
       // console.log(verifyToken);
        const cart = await Cart.findOne({user:verifyToken._id});
       // console.log(cart);
        const isExist = await cart.products.some(pdoc =>   productId === pdoc.product.toString());
        //console.log(isExist);

        if(isExist){

            await Cart.findOneAndUpdate({_id : cart._id , "products.product":productId} ,
                
                {  $inc:    {  "products.$.orderedQuantity":quantity  }  }

                )

        }
        else{
            const addProducts = { orderedQuantity:quantity , product:productId};
            await Cart.findOneAndUpdate({_id : cart._id} ,
                {$push:{products:addProducts}}
                )
        }
         res.status(200).json({message:"product added to cart"});

    }catch(err){
        return res.status(401).json({error:"you must logged in "});
    }



})


router.delete("/cart" , async(req , res )=>{
    
    try{

        const { productId } = req.body;
        const userTokens = req.cookies.token;
        const verifyToken =  jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        const cart = await Cart.findOne({user:verifyToken._id});

        const newCart = await Cart.findOneAndUpdate({_id : cart._id} ,
            {$pull:{products:{product:productId}}},
            {new:true}
            ).populate("products.product");

            res.status(200).json(newCart.products);

    }catch(err){
        console.log(err);
    }    
    

})


module.exports = router;