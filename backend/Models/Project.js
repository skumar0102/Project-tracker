import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema({
    project_name : {type:String},
    project_code : {type:String},
    description  : {type:String},
    email        : {type:String},
    date_of_creation : {type:String},
    project_type : {type:String},
    project_file : {type:String},

},{timestamps:true})

export default new mongoose.model("Projects",ProjectSchema);