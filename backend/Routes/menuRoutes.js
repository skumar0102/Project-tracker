import express from 'express';
import {createMenu,getMenu,deleteMenu,getMenuAdmin,getMenuManager,getMenuUser,getMenuTester} from '../Controllers/MenuController.js';

const router = express.Router();


router.post("/",createMenu);
router.get("/",getMenu);
router.get("/admin",getMenuAdmin);
router.get("/manager",getMenuManager);
router.get("/user",getMenuUser); 
router.get("/tester",getMenuTester); 
router.delete("/:id",deleteMenu);

export default router;