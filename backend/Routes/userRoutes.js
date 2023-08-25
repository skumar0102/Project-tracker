import express from 'express';
import {createUser,getUsers,getUserById,updateUser,deleteUser,forgotpassword,getAdmin,
    getManager,
    getUser} from '../Controllers/UserController.js'
import {admin} from '../Middlewares/authMiddleware.js';

const router = express.Router();

// router.post("/",admin,createUser);
router.post("/",createUser);
router.get("/",getUsers);
router.get("/admin",getAdmin);
router.get("/manager",getManager);
router.get("/user",getUser);
router.get("/:id",getUserById);
// router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.put("/forgotpassword",forgotpassword);
router.put("/:id",updateUser);


export default router;