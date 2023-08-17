import Issue from "../Models/Issue.js";

async function createIssue(req, res) {
  try {
    let {
      project_code,
      issue_type,
      issue_status,
      summary,
      description,
      assignee,
      starting_date,
      ending_date,
      reporter,
    } = req.body;
    let result = await Issue.create({
      project_code,
      issue_type,
      issue_status,
      summary,
      description,
      assignee,
      starting_date,
      ending_date,
      reporter,
    });
    res.status(201).send("Issue created succesfully !");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getIssues(req,res){
    try {
        let result = await Issue.find();
        res.status(200).send({ result });
    } catch (error) {
      res.status(400).send(error.message);
    }
}

async function getIssueByName(req,res){
  try {
    let result = await Issue.find({assignee:req.params.assignee});
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getIssuePending(req,res){
  try {
    let result = await Issue.find({issue_status:'To Do'});
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getIssueCompleted(req,res){
  try {
    let result = await Issue.find({issue_status:'Done'});
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getIssueProgress(req,res){
  try {
    let result = await Issue.find({issue_status:'In-progress'});
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export {createIssue,getIssues,getIssueCompleted,getIssuePending,getIssueProgress,getIssueByName};
