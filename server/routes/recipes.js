import { Router } from "express";
import {getRecipes,createRecipes,updateRecipes, deleteRecipes,likeRecipes }from "../controllers/recipes.js";
import authentication from "../middlewares/authentication.js"

const router=Router();

router.get("/",getRecipes);
router.post("/", authentication, createRecipes);
router.patch("/:id", authentication, updateRecipes);
router.delete("/:id",authentication, deleteRecipes);
router.patch("/:id/likeRecipes", authentication, likeRecipes);




export default router;
