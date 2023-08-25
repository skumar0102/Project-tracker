import Project from "../Models/Project.js";

async function createProject(req,res){
    try {
        let project_random_no = Math.floor(Math.random() * 100000);
        let {project_name,description,email,date_of_creation,project_type} = req.body
        let result = await Project.create({project_name,project_code:project_random_no,description,email,date_of_creation,project_type});
        res.status(201).send('Project created succesfully !');
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

async function getProject(req,res){
    try {
        let result = await Project.find();
        res.status(200).send({ result });
    } catch (error) {
      res.status(400).send(error.message);
    }
}

async function deleteProject(req,res){
    try {
      let result = await Project.deleteOne({ _id: req.params.id });
      res.status(200).send("Project Deleted !");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async function getProjectById(req, res) {
    try {
      let result = await Project.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async function updateProject(req,res){
    try {
        let result = await Project.findOneAndUpdate({_id:req.params.id},req.body);
        res.status(200).send("Project Updated Successfully !")
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

export {createProject,getProject,deleteProject,getProjectById,updateProject};