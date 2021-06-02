const jwt = require("jsonwebtoken");

const User = require("../MODELS/userSchema")

const Authenticate = async( req , res , next )=>{


    try{

        const tokens = req.cookies.token;
        console.log(tokens);
        const verifyToken = jwt.verify(tokens , process.env.JWT_SECRET_KEY);
        console.log(verifyToken);

        const rootUser = await User.findOne({_id:verifyToken._id});

        if(!rootUser) {
            throw new Error("User not found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req._id = rootUser._id;

        next();

    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err)
    }


}

module.exports = Authenticate;