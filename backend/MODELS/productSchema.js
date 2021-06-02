const mongoose = require("mongoose");

const productSchema =  new mongoose.Schema({

    productName:{
        type: String,
        required:true
    },
    MRP:{
        type:Number,
        required:true
    },
    DiscountPrice:{
        type:Number,
        
    },
    DeliveryCharge:{
        type:Number,
        
    },
    availableQuantity:{
        type:Number,
        required:true
    },
    description:{
        type: String,
        required:true
    } ,

    image:{
        type:String,
        required:true
    }
} ,
{timestamps:true}

)

const Product  = mongoose.model('product' ,productSchema);

module.exports = Product;