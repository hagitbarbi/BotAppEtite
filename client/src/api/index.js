import axios from "axios";

const api=axios.create({baseURL:"http://localhost:5001"});

api.interceptors.request.use((req) => {

    if (localStorage.getItem("profile")) {
        const profile = JSON.parse(localStorage.getItem("profile"));

        req.headers.Authorization = `Bearer ${profile.token}`;
    }

    return req;
});

export const fetchRecipes =() => api.get("/recipes");
export const createRecipes =(recipe) => api.post("/recipes", recipe);
export const updateRecipes =(id, recipe) => api.patch(`${"/recipes"}/${id}`, recipe);
export const deleteRecipes =(id) => api.delete(`${"/recipes"}/${id}`);
export const likeRecipes =(id) => api.patch(`${"/recipes"}/${id}/likeRecipes`);

export const login = async (formValues) => api.post("/user/login", formValues);
export const signup = async (formValues) => api.post("/user/signup", formValues);
