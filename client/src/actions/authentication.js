import * as api from "../api";
import { 
    AUTHENTICATION} from "../constants/actionTypes";

    const signup = (formValues, navigate) => async (dispatch) => {
        try {
            const { data } = await api.signup(formValues);
            console.log("Signup response:", data); // בדוק אם הנתונים נכונים
    
            dispatch({
                type: AUTHENTICATION,
                payload: data,
            });
            navigate("/");
        } catch (error) {
            console.log("Signup error:", error.message);
        }
    };
    
    const login = (formValues, navigate) => async (dispatch) => {
        try {
            const { data } = await api.login(formValues);
            console.log("Login response:", data); // בדוק אם הנתונים נכונים
    
            dispatch({
                type: AUTHENTICATION,
                payload: data,
            });
            navigate("/");
        } catch (error) {
            console.log("Login error:", error.message);
        }
    };
    

    export {signup, login};