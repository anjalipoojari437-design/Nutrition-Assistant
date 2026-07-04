const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{

const token=req.header("Authorization");

if(!token){

return res.status(401).json({message:"Access Denied"});

}

try{

const verify=jwt.verify(token,"nutritionsecret");

req.user=verify;

next();

}catch(err){

res.status(400).json({message:"Invalid Token"});

}

};