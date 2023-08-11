import Project from "../Models/Project.js";

async function createProject(req,res){
    try {
        let {project_name,project_code,description,phone,date_of_creation,project_type} = req.body
        let result = await Project.create({project_name,project_code,description,phone,date_of_creation,project_type});
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

export {createProject,getProject};