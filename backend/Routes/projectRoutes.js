import express from "express";
import {createProject,getProject} from '../Controllers/ProjectController.js';

const router = express.Router();

router.post('/',createProject);
router.get('/',getProject)

export default router;