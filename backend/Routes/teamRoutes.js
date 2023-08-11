import express from "express";
import {createTeam,getTeam} from '../Controllers/TeamController.js';

const router = express.Router();

router.post('/',createTeam);
router.get('/',getTeam);

export default router;

