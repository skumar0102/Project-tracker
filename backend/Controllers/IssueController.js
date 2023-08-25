import Issue from "../Models/Issue.js";
import transport from "../Config/nodemailerConfig.js";
async function createIssue(req, res) {
  try {
let ticket_random_no = Math.floor(Math.random() * 1000000000);
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
      email,
      createdby
    } = req.body;
    let result = await Issue.create({
      ticket_no:ticket_random_no,
      project_code,
      issue_type,
      issue_status,
      summary,
      description,
      assignee,
      starting_date,
      ending_date,
      reporter,
      email,
      createdby
    });
    res.status(201).send("Issue created succesfully !");

    const mailData = {
      from: process.env.MAILTRAP_USERNAME,
      to: req.body.email,
      subject: `Assigne Task by ${req.body.reporter}`,
      html: `
     
      <h2>Task assigned successfully Done !</h2><br/>
              <h3>Ticket Number : ${result.ticket_no}</h3>
              <h3>Project Code : ${req.body.project_code}</h3>
              <h3>Issue Type   : ${req.body.issue_type}</h3>
              <h3>Issue Status : ${req.body.issue_status}</h3>
              <h3>Summary      : ${req.body.summary}</h3>
              <h3>Description  : ${req.body.description}</h3>
              <h3>Starting Date: ${req.body.starting_date}</h3>
              <h3>Ending Date  : ${req.body.ending_date}</h3>
              <h3>Reporting    : ${req.body.reporter}</h3>
      
      <h3>Thanks & Regards<br/>
      ${req.body.reporter}
      </h3>
              
      `,
    };
    await transport.sendMail(mailData);
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

async function getIssueByEmail(req,res){
  try {
    let result = await Issue.find({email:req.params.email});
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send(error.message);
  }
}


async function deleteissue(req,res){
    try {
      let result = await Issue.deleteOne({ _id: req.params.id });
      res.status(200).send("Issue Deleted !");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async function getIssueById(req, res) {
    try {
      let result = await Issue.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

    async function updateIssue(req,res){
    try {
        let result = await Issue.findOneAndUpdate({_id:req.params.id},req.body);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

async function getIssueByCode(req,res){
  try {
    let result = await Issue.find({createdby:req.params.createdby});
    res.status(200).send({result});
  } catch (error) {
    res.status(400).send(error.message);
  }
}


export {createIssue,getIssues,getIssueByEmail,deleteissue,getIssueById,updateIssue,getIssueByCode};
