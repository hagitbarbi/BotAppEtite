import mongoose from "mongoose";
import Recipe from "../models/recipeContent.js";


const getRecipes= async(req ,res) => {
    try{
        const recipe= await Recipe.find();
          res.status(200).json(recipe);
    }catch(error){
          res.status(404).json({message:error.message })
    }
}

const createRecipes= async(req, res)=>{
    const body = req.body ||{};

    const newRecipe = new Recipe({
      ...body,
     userId: req.userId,
     postDate: new Date().toISOString()
    });
    try{
     await newRecipe.save();
          res.status(201).json(newRecipe);
    }catch(error){
          res.status(409).json({message:error.message })
    }
}

const updateRecipes = async (req, res) => {
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
    
      if (!recipe) {
        return res.status(404).send("There is no Recipe match to this id");
      }
    
      try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedRecipe);
      } catch (error) {
        res.status(500).send("Something went wrong while updating the recipe");
      }
    };

    const deleteRecipes = async (req, res) => {
      const { id } = req.params;
    
      try {
        // בדוק אם ה-ID תקין
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).send("Invalid ID format");
        }
    
        // מחיקת המתכון לפי ID
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
          return res.status(404).send("No recipe with that ID");
        }
    
        res.status(200).json({ message: "Recipe deleted successfully" });
      } catch (error) {
        console.error("Error during recipe deletion:", error.message);
        res.status(500).send("Something went wrong while deleting the recipe");
      }
    };
    
    
     const likeRecipes = async (req, res) => {
      const { id } = req.params;

      if (!req.userId) return res.json({ message: "Unauthenticated User" });

    
      try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).send("Invalid recipe ID");
        }
    
        const recipe = await Recipe.findById(id);

        const index = recipe.likes.findIndex(id => id === String(req.userId));
           
        if (index === -1) { // if user has not liked the Recipe
          recipe.likes.push(req.userId);
      } else {
          recipe.likes = recipe.likes.filter(id => id !== String(req.userId));
      }


      const updateRecipes = await Recipe.findByIdAndUpdate(id, recipe, { new: true });

      res.status(200).json(updateRecipes);
    } catch (error) {
      console.error("Error liking recipe:", error.message);
      res.status(500).send("Something went wrong while liking the recipe");
    }
  };
    
    
    



export {getRecipes, createRecipes, updateRecipes, deleteRecipes, likeRecipes};