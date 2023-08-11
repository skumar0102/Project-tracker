import express from 'express';
import {getAdminUsers,getAdminManager} from '../Controllers/AdminController.js';

const router = express.Router();

router.get("/users",getAdminUsers);
router.get("/managers",getAdminManager);


export default router;