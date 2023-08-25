import express from "express";
import {createProject,getProject,deleteProject,getProjectById,updateProject} from '../Controllers/ProjectController.js';

const router = express.Router();

router.post('/',createProject);
router.get('/',getProject);
router.get('/:id',getProjectById);
router.delete('/:id',deleteProject);
router.put('/:id',updateProject)


export default router;