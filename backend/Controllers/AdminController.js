import User from "../Models/User.js";

async function getAdminUsers(req,res){
    try {
        let result = await User.find({role:'User'});
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getAdminManager(req,res){
    try {
        let result = await User.find({role:'Manager'});
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export {getAdminUsers,getAdminManager}