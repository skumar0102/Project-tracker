import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    first_name : {type:String},
    last_name : {type:String},
    email  : {type:String},
    phone        : {type:String},
    date_of_joining : {type:Date},
    designation : {type:String}
},{timestamps:true})

export default new mongoose.model("Team",ProjectSchema);