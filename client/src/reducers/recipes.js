const recipeReducer = (state =[],action) => {
          switch (action.type){
            case "FETCH_ALL_RECIPES":
                return action.payload;
            case "CREATE_RECIPE":
                return [...state, action.payload];
            case "UPDATE_RECIPE":
                return state.map(recipe => recipe._id === action.payload._id ? action.payload : recipe);
            case "DELETE_RECIPE":
                 return state.filter(recipe => recipe._id !== action.payload);
           
            
            default:
                return state;
          }
}

export default recipeReducer;