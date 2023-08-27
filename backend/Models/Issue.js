import mongoose from "mongoose";


const IssueSchema = new mongoose.Schema({
    ticket_no : {type:String},
    project_code: {type:String},
    issue_type:{type:String},
    issue_status : {type:String},
    summary:{type:String},
    description:{type:String},
    assignee:{type:String},
    starting_date :{type:String},
    ending_date: { type:String},
    reporter: {type:String},
    email: {type:String},
    createdby: {type:String},
    project_file: {type:String}
},{timestamps:true})

export default new mongoose.model("Issues",IssueSchema);