const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) => {
    const token = req.header("Authorization")

    if(!token){
        return res.status(401)
        .json({message : "Access no token provided"})
    }

    try{
        const decoded = jwt.verify(token.split(" ")[1],process.env.ACCESS_TOKEN_SECRET);
        req.user=decoded.userId;

        next();
    }
    catch(error){
        res.status(403).json({ message:"Invalis token " })

    }
};

module.exports = authMiddleware;
