import User from "../Models/User.js";
import bcrypt from "bcrypt";
import transport from "../Config/nodemailerConfig.js";
import jwt from "jsonwebtoken";
async function createUser(req, res) {
  try {
    let {
      employee_code,
      first_name,
      last_name,
      email,
      password,
      role,
      isVerified,
      
     
    } = req.body;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let token = jwt.sign(
      {
        employee_code,
        first_name,
        last_name,
        email,
        password,
        role,
        isVerified,
        expiresIn: 60,
      },
      process.env.JWT_SECRET_KEY
    );

    let result = await User.create({
      employee_code,
      first_name,
      last_name,
      email,
      password: hash,
      role,
    });
    res
      .status(201)
      .send({
        success: true,
        result: {
          employee_code : result.employee_code,
          first_name: result.first_name,
          last_name: result.last_name,
          email: result.email,
          password: result.password,
          role: result.role,
          accessToken : result.accessToken
        },
      });

    // Find users whose creation time has exceeded the desired period
    // const threshold = new Date(Date.now() - desiredPeriodInMilliseconds);
    // User.updateMany(
    //   { createdAt: { $lt: threshold } },
    //   { $set: { fieldToChange: "new value" } }
    // )
    //   .then((result) => {
    //     console.log(`${result.nModified} user(s) updated successfully.`);
    //   })
    //   .catch((error) => {
    //     console.error("Error updating users:", error);
    //   });

    
  

    const mailData = {
      from: process.env.MAILTRAP_USERNAME,
      to: req.body.email,
      subject: "Account Verification",
      html: `<h2>Verify Account using below link.</h2>
                <a href="http://localhost:4546/auth/verify?token=${token}">VERIFY</a>
                `,
    };
    await transport.sendMail(mailData);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getManager(req,res){
  try {
      let result = await User.find({'role':'Manager'});
      res.status(200).send({result});
  } catch (error) {
      res.status(400).send(error.message);
  }
}

async function getAdmin(req,res){
  try {
      let result = await User.find({'role':'Admin'});
      res.status(200).send({result});
  } catch (error) {
      res.status(400).send(error.message);
  }
}

async function getUser(req,res){
  try {
      let result = await User.find({'role':'User'});
      res.status(200).send({result});
  } catch (error) {
      res.status(400).send(error.message);
  }
}

async function getUsers(req, res) {
  try {
    let result = await User.find();
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getUserById(req, res) {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateUser(req, res) {
  try {
    let result = await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).send("Employee Updated Successfully !");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    let result = await User.deleteOne({ _id: req.params.id });
    res.status(200).send("Employee Deleted !");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function forgotpassword(req, res) {
  try {
    let emailUser = await User.findOne({'email':req.body.email});
    if(!emailUser) return res.status(400).send('User not found');

    let result = await User.findOneAndUpdate({
      email: emailUser,
      password: req.body.password,
    });
    res.status(200).send({ success: true, result,message:"Updated" });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  forgotpassword,
  getAdmin,
  getManager,
  getUser
};
