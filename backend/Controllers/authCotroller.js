import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import transport from '../Config/nodemailerConfig.js'

async function Login(req,res){
try {
   let result = await User.findOne({'email':req.body.email});
   if(!result) return res.status(404).send("User not found");

   let authResult = await bcrypt.compare(req.body.password, result.password);
   if(!authResult) return res.status(401).send('Incorrect password');

//    let userverify = await User.findOne({'isVerified':true});
//    if(!userverify) return res.status(401).send('This Account not Verfified');
   
   let token = jwt.sign({
       first_name : result.first_name,
       last_name : result.last_name,
       email : result.email,
       role : result.role,
       isVerified : result.isVerified,
       expiresIn :60
   },
   process.env.JWT_SECRET_KEY,
   )

   
   res.status(200).send({success:true, token,result});
} catch (error) {
    res.status(400).send(error.message);
}
}


async function verify(req,res){
    try {
        let {token} = req.query;
        let decodedInfo = jwt.verify(token,process.env.JWT_SECRET_KEY);
        let user = await User.findOneAndUpdate({
            email : decodedInfo.email
        },{isVerified:true})

        const mailData = {
            from: process.env.MAILTRAP_USERNAME,
            to: decodedInfo.email,
            subject: "Account Verification is Done",
            html: `<h2>Your Account has been verified successfully</h2>
                      
                      `,
          };
          await transport.sendMail(mailData);

        res.status(200).send("Your account has been verified");

    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function logout(req,res){
    try {
        console.log("Hello my logout page");
        res.status(200).send("User Logout");
    } catch (error) {
        res.status(400).send(error.message);
    }
}


export  {Login,verify,logout};