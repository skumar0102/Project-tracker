import express from 'express';
import {Login,verify,logout,authLogin} from '../Controllers/authCotroller.js';

const router = express.Router();



// login route
router.post("/",Login);
router.get("/verify",verify);
router.get("/logout",logout);

export default router;