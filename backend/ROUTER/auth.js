const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');



require('../DATABASE/initDB');
const User = require('../MODELS/userSchema');
const Cart = require('../MODELS/cartSchema')


router.use(cookieParser());

//Middleware
// const middleware = (req , res , next)=>{
//     console.log('hello to my middleware');
//     next();
// }



// router
// router.get('/' , middleware ,(req , res) => {
//     res.json({name :"himangshu from router"})
// })




router.post('/register', async (req , res )=>{

     const { firstName , lastName , mobileNumber , email ,password , conformPass } = req.body;
    if (!firstName || !lastName || !mobileNumber  ||  !password || !conformPass )
    {
        return res.status(422).json({error:"plz fill the details"})
    }

    try{
        
        const userExist = await User.findOne({mobileNumber});

        if(userExist){
            return res.status(422).json({err:"user exits already"})
        }
        else if(password != conformPass){

            return res.status(422).json({error:"password not matched"})
        }
        else{
            const user = new User({firstName , lastName , mobileNumber , email ,password , conformPass} );

            await user.save();
            
            const cart = new Cart({user:user._id})
            await cart.save();

            res.status(200).json({ message:"user registered successfully" })
        }
        
        
    
    }catch (err){
        console.log(err)
    }
})



//login in route

router.post("/signIn" , async (req , res ) => {

    // console.log(req.body);
    // res.json({message:"awasome"})

    try{

        const { mobileNumber , password } = req.body;

        if( !mobileNumber || !password){
            return res.status(200).json({error:" plz fille the fields"})
        }

        const userLogin = await User.findOne({mobileNumber});
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password);

            
            


            // const token = await userLogin.generateAuthToken();
            // console.log(token);

            // res.cookie("jwtoken" , token , {
            //     expires: new Date(Date.now() + 25982000000),
            //     httpOnly:true
            // });


        if(isMatch)
               {
                const token = jwt.sign({_id :userLogin._id} , process.env.JWT_SECRET_KEY , {
                    expiresIn:"30d"
                });
            
                    
                res.cookie("token" ,token) ,{ httpOnly: true };
                res.status(200).json({token})
                //console.log(token)
               }  
        
        else
        {
            res.status(401).json({error:"user error"});
            
        }
           
    }
    else
    {
        
        res.status(401).json({message:"invalid Credentials"})
    }
        

    }catch(err){
        console.log(err)
    }
})




router.get("/userLoggedIn"  , async ( req  , res ) =>{
    try{
        const userTokens = req.cookies.token;
        //console.log(`the cookie req ${userTokens}`);
        // const ab = jwt.decode(userTokens);
        // console.log(ab)
        const verifyToken = await jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        //console.log(`user : ${verifyToken}`);

        const user = await User.findById({_id: verifyToken._id});
        res.status(200).json({user});
        // console.log(user)

    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err);
    }
    
})



module.exports = router;







// USING PROMISE
// router.post('/register' , (req , res )=>{

//     const { firstName , lastName , mobileNumber , email ,password , confirmPass  } = req.body;
//     if (!firstName || !lastName || !mobileNumber  ||  !password || !confirmPass )
//     {
//         return res.status().json({error:"plz fill the details"})
//     }

//     User.findOne({firstName}).then((userExit)=> {
//         if(userExit){
//             return res.status(422).json({err:"user exits already"})
//         }

//         const user = new User({firstName , lastName , mobileNumber , email ,password , confirmPass })

//         user.save().json().then(()=>{
//             res.status(201).json({message :"user registered successfully"})
//         }).catch((err)=>res.status(500).json({message:"Failed to registered"}));

//     }).catch( err =>{
//         console.log(err)
//     })

//    })