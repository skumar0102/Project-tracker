import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    // userid : {type:Number, require:false},
    // role: {type:String,default:'User' ,enum:["001","002","003","004","005","006"]},
    employee_code: {type:String,require:true,unique: true },
    role: {type:String,default:'User' },
    first_name : {type:String, maxlength:50, require : true},
    last_name : {type:String, maxlength:50, require : true},
    email : {type:String,require:true,unique: true},
    password : {type:String,require:true,maxlength:200},
    isVerified: {type:Boolean, default:false},
    
},{timestamps : true})


export default new mongoose.model("Users",UserSchema);