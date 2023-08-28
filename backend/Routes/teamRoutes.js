import express from "express";
import {createTeam,getTeam,deleteTeam,getTeamById,updateTeam} from '../Controllers/TeamController.js';
import upload from "../Config/multerConfig.js";
const router = express.Router();

router.post('/',upload.single('images'),createTeam);
router.get('/',getTeam);
router.get('/:id',getTeamById);
router.delete('/:id',deleteTeam);
router.put('/:id',upload.single('images'),updateTeam)
export default router;

