import * as api from "../api";
import { 
    FETCH_ALL_RECIPES,
    CREATE_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE} from "../constants/actionTypes";

export const getRecipes = () =>async (dispatch) =>{

try{
    const {data} = await api.fetchRecipes();
    dispatch({type:FETCH_ALL_RECIPES, payload:data});

}catch (error){
console.log(error.message);
}  
};

export const createRecipes = (recipe) =>async (dispatch) =>{
try{
    const {data} = await api.createRecipes(recipe);
    dispatch({type:CREATE_RECIPE, payload:data});

}catch(error){
    console.log(error.message);

}
    
};

export const updateRecipes = (id, recipe) =>async (dispatch) =>{
        try{
            const {data} = await api.updateRecipes(id, recipe);
            dispatch({type:UPDATE_RECIPE, payload:data});
        
        }catch(error){
            console.log(error.message);
        
        }
            
};

export const deleteRecipes = (id) =>async (dispatch) =>{
        try{
             await api.deleteRecipes(id);
            dispatch({type:DELETE_RECIPE, payload:id});
        
        }catch(error){
            console.error("Error deleting recipe:", error.message);        
        }
            
};
export const likeRecipes = (id) =>async (dispatch) =>{
    try{
        const {data} = await api.likeRecipes(id);
        dispatch({type:UPDATE_RECIPE, payload:data});
    
    }catch(error){
        console.error( error.message);        
    }
        
};