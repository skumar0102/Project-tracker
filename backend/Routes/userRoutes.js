import express from 'express';
import {createUser,getUsers,getUserById,updateUser,deleteUser,forgotpassword,getAdmin,
    getManager,
    getUser,getTester} from '../Controllers/UserController.js'
import {admin} from '../Middlewares/authMiddleware.js';
import upload from "../Config/multerConfig.js";

const router = express.Router();

// router.post("/",admin,createUser);
router.post("/",upload.single('avatar'),createUser);
router.get("/",getUsers);
router.get("/admin",getAdmin);
router.get("/manager",getManager);
router.get("/user",getUser);
router.get("/tester",getTester);
router.put("/forgotpassword",forgotpassword);
router.get("/:id",getUserById);
// router.put("/:id",updateUser);
router.put("/:id",upload.single('avatar'),updateUser);
router.delete("/:id",deleteUser);


export default router;