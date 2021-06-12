
const mongoose = require("mongoose");
const { ObjectId} = mongoose.Schema.Types;

const orderSchema =  new mongoose.Schema({

    user:{
        type:ObjectId,
        ref:"user",
        required:true
    }
    ,
    products:[
        {
            orderedQuantity:{
                type: Number,
                default:1,
                required:true
            },
            product:{
                type: ObjectId ,
                ref:"product"
            }
        }
    ],
    totalPrice:{
                type: Number,
                required:true
    },
    address:{
        type: String,
                required:true
    }






} ,
{timestamps:true}

)

const Order  = mongoose.models.order  ||  mongoose.model('order' ,orderSchema);

module.exports = Order;