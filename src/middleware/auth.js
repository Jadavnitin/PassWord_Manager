const jwt = require("jsonwebtoken");
const signup = require("../models/models");

const auth=async (req,res,next) =>{
   try {
      const token = req.cookies.jwt;
      const verifyUser = jwt.verify(token, process.env.SECERET_KEY);
      console.log(verifyUser);
      
      const userData = await signup.findOne({ _id: verifyUser._id });
      console.log(userData.username);
      
      req.token = token;
      req.userData = userData;
      
      next();
   } catch (error) {
      res.status(401).send(error);
   }
}
module.exports = auth;