const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema=  new mongoose.Schema({

    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    } ,
    mobileNumber:{
        type:Number,
        required:true
    },

    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    conformPass:{
        type:String,
        required:true
     }
   // ,
    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ]
} ,
{timestamps:true}

)


// hash the password 

userSchema.pre('save' , async function (next) {

    
    if(this.isModified('password'))
    {
        this.password =  await bcrypt.hash(this.password , 12);
        this.conformPass = await bcrypt.hash(this.conformPass ,12)
    }
    next();
});


// GENERATING WEB  TOKEN 

// userSchema.methods.generateAuthToken = async function(){

//         try{

//             let token = jwt.sign({_id:this._id} , process.env.JWT_SECRET_KEY);
//             this.tokens = this.tokens.concat( {token:token} )
//             await this.save();
//             return token;

//         }catch(err){
//             console.log(err)
//         }
// }



const User  = mongoose.model('user' ,userSchema);

module.exports = User;