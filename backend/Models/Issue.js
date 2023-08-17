import mongoose from "mongoose";


const IssueSchema = new mongoose.Schema({
    project_code: {type:String},
    issue_type:{type:String},
    issue_status : {type:String},
    summary:{type:String},
    description:{type:String},
    assignee:{type:String},
    starting_date :{type:Date},
    ending_date: { type:Date},
    reporter: {type:String}
},{timestamps:true})

export default new mongoose.model("Issues",IssueSchema);