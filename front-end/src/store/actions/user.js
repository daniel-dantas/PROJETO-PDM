import api from "../../services/api";

export const LOGIN = "[USER] LOGIN";
export const LOGIN_SUCCESS = "[USER] LOGIN_SUCCESS";
export const LOGIN_FAILED = "[USER] LOGIN_FAILED";

export const REGISTER = "[USER] REGISTER";
export const REGISTER_SUCCESS = "[USER] REGISTER_SUCCESS";
export const REGISTER_FAILED = "[USER] REGISTER_FAILED";

export const READ_USERS = "[USER] READ_USERS";
export const READ_USERS_SUCCESS = "[USER] READ_USERS_SUCCESS";
export const READ_USERS_FAILED = "[USER] READ_USERS_FAILED";

export const LOGOUT = "[USER] LOGOUT";


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

export function logout(){
    return async (dispatch, getState) => {
        dispatch({ type: LOGOUT });
    }
}

export function refresh(callback){
    return async (dispatch,  getState) => {
        dispatch({type: LOGIN});

        try {

            const { token } = getState().user;

            const response = await api.post("/usuario/auth/refresh", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log("Data: ", response.data);

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

export function readUsers(config, callback){
    return async (dispatch, getState) => {
        dispatch({ type: READ_USERS });

        try {
            const { token } = getState().user;

            const { alunos, professores, diretores } = config;

            const response = await api.get(`/usuario?alunos=${alunos}&professores=${professores}&diretores=${diretores}`, {
                Authorization: "Bearer "+token
            });

            if(response.data){
                dispatch({ type: READ_USERS_SUCCESS });
                dispatch(refresh());
                return callback && callback(null, response.data);
            }else{
                dispatch({ type: READ_USERS_FAILED });
                return callback && callback(new Error("Read Failed"));
            }

        } catch (e) {
            dispatch({ type: READ_USERS_FAILED });
            return callback && callback(e);
        }

    }
}
