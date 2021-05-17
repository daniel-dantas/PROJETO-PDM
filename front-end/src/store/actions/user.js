import api from "../../services/api";

export const LOGIN = "[USER] LOGIN";
export const LOGIN_SUCCESS = "[USER] LOGIN_SUCCESS";
export const LOGIN_FAILED = "[USER] LOGIN_FAILED";

export const REGISTER = "[USER] REGISTER";
export const REGISTER_SUCCESS = "[USER] REGISTER_SUCCESS";
export const REGISTER_FAILED = "[USER] REGISTER_FAILED";

export function login(data, callback){
    return async (dispatch, getState) => {
        dispatch({type: LOGIN});

        try {
            const response = await api.post("/usuario/auth", data);

            if(response.data){
                dispatch({ type: LOGIN_SUCCESS, payload: response.data });
                return callback && callback(null, response.data);
            }else{
                dispatch({type: LOGIN_FAILED});
                return callback && callback(new Error("failed auth!"));
            }

        } catch (e) {
            dispatch({type: LOGIN_FAILED});
            return callback && callback(e);
        }

    }
}

export function register(data, callback){
    return async (dispatch, getState) => {
        dispatch({ type: REGISTER });

        try {
            const response = await api.post("/usuario", data);

            if(response.data){
                dispatch({ type: REGISTER_SUCCESS, payload: response.data });
                return callback && callback(null, response.data);
            }else{
                dispatch({ type: REGISTER_FAILED });
                return callback && callback(new Error("failed register"));
            }

        } catch (e) {
            dispatch({ type: REGISTER_FAILED });
            return callback && callback(e);
        }

    }
}