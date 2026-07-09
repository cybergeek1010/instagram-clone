const jwt = require("jsonwebtoken");
const auth = (req,res,next)=>{
    console.log(req.headers)
    const token = req.header("Authorization");
    console.log("Token received:");
    console.log(token);
    if(!token){
        return res.status(401).json({
            message: "Access denied.No token provided"
        })
    }
    const decoded = jwt.verify(token,"mysecretkey")
    req.user=decoded;
    next();
};
module.exports=auth;