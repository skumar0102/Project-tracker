import Team from "../Models/Team.js";

async function createTeam(req,res){
    try {
        let {first_name,last_name,email,phone,date_of_joining,designation} = req.body
        let result = await Team.create({first_name,last_name,email,phone,date_of_joining,designation});
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

export {createTeam,getTeam};