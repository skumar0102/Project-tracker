import Menu from "../Models/Menu.js";

async function createMenu(req,res){
    try {
        let result = await Menu.create(req.body);
        res.status(201).send("Menu Created Successfully Done.",result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getMenu(req,res){
    try {
        let result = await Menu.find();
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getMenuAdmin(req,res){
    try {
        let result = await Menu.findOne({'role':'Admin'});
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getMenuManager(req,res){
    try {
        let result = await Menu.findOne({'role':'Manager'});
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getMenuUser(req,res){
    try {
        let result = await Menu.findOne({'role':'User'});
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function getMenuTester(req,res){
    try {
        let result = await Menu.findOne({'role':'Tester'});
        res.status(200).send({result});
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function deleteMenu(req,res){
    try {
        let result = await Menu.deleteOne({_id:req.params.id});
        res.status(200).send("Deleted !");
    } catch (error) {
        res.status(400).send(error.message);
    }
}



export {createMenu,getMenu,deleteMenu,getMenuAdmin,getMenuManager,getMenuUser,getMenuTester}