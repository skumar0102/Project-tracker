import Team from "../Models/Team.js";

async function createTeam(req,res){
    try {
        let id_no_increment = await Team.find().count()+1;
        let {first_name,last_name,email,phone,date_of_joining,designation,avatar} = req.body
        let result = await Team.create({id:id_no_increment,first_name,last_name,email,phone,date_of_joining,designation,avatar});
        res.status(201).send('Member created succesfully !');
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

async function getTeam(req,res){
    try {
        let result = await Team.find();
        res.status(200).send({ result });
    } catch (error) {
      res.status(400).send(error.message);
    }
}

async function deleteTeam(req,res){
    try {
      let result = await Team.deleteOne({ _id: req.params.id });
      res.status(200).send("Team Member Deleted !");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async function getTeamById(req, res) {
    try {
      let result = await Team.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async function updateTeam(req,res){
    try {
        let result = await Team.findOneAndUpdate({_id:req.params.id},req.body);
        res.status(200).send("Team Updated Successfully !")
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}



export {createTeam,getTeam,deleteTeam,getTeamById,updateTeam};