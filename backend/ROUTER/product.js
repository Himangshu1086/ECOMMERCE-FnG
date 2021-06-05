const express = require('express');
const router = express.Router();

require('../DATABASE/initDB');
const Product = require('../MODELS/productSchema');



// POST REQUEST FOR THE PRODUCTS 


router.post("/product" , async (req  , res ) =>{

try{
const { productName , MRP , DiscountPrice , DeliveryCharge , availableQuantity , description , image } =  req.body;

if(!productName || !MRP || !DiscountPrice || !DeliveryCharge ||  !availableQuantity || !description || !image)
{
    return res.status(422).json({error:"plz fill the details"})
}



    const items =  new Product({productName , MRP , DiscountPrice , DeliveryCharge , availableQuantity , description , image});
    await items.save();
    res.status(201).json({ message:"product added successfully" })

}catch(err){
    console.log(err);
}

});


//GET REQUEST FOR PRODUCTS 


router.get("/getProduct" , async(req , res)=>{

    const product = await Product.find()
    res.status(200).json(product);
    
})




// get request for getting the product description in the description page


router.get(`/productDesp` , async(req , res)=>{

   const ids  = req.headers.id;
    try{
        const product = await Product.findById({_id:ids});
        return res.status(200).json(product);
    }catch(err)
    {
        res.status(422).json({error:"product not found !"});
        console.log(err);
    }
})



module.exports = router;






