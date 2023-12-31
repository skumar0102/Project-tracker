import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    id : {type:Number,default:0},
    first_name : {type:String},
    last_name : {type:String},
    email  : {type:String},
    phone        : {type:String},
    date_of_joining : {type:String},
    designation : {type:String},
    avatar : {type:String}
},{timestamps:true})

export default new mongoose.model("Team",ProjectSchema);