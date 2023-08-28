import express from "express";
import {createProject,getProject,deleteProject,getProjectById,updateProject} from '../Controllers/ProjectController.js';
import upload from "../Config/multerConfig.js";

const router = express.Router();

router.post('/',upload.single('project_file'),createProject);
router.get('/',getProject);
router.get('/:id',getProjectById);
router.delete('/:id',deleteProject);
router.put('/:id',upload.single('project_file'),updateProject)


export default router;