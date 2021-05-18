import api from "../../services/api";
import {
    READ_USERS,
    READ_USERS_FAILED,
    READ_USERS_SUCCESS,
    refresh,
    REGISTER,
    REGISTER_FAILED,
    REGISTER_SUCCESS
} from "./user";

export const CREATE_CLASS = "[CLASS] CREATE_CLASS";
export const CREATE_CLASS_SUCCESS = "[CLASS] CREATE_CLASS_SUCCESS";
export const CREATE_CLASS_FAILED = "[CLASS] CREATE_CLASS_FAILED";

export const READ_CLASS = "[CLASS] READ_CLASS";
export const READ_CLASS_SUCCESS = "[CLASS] READ_CLASS_SUCCESS";
export const READ_CLASS_FAILED = "[CLASS] READ_CLASS_FAILED";

export const UPDATE_CLASS = "[CLASS] UPDATE_CLASS";
export const UPDATE_CLASS_SUCCESS = "[CLASS] UPDATE_CLASS_SUCCESS";
export const UPDATE_CLASS_FAILED = "[CLASS] UPDATE_CLASS_FAILED";

export const VINCULAR = "[CLASS] VINCULAR";
export const VINCULAR_SUCCESS = "[CLASS] VINCULAR_SUCCESS";
export const VINCULAR_FAILED = "[CLASS] VINCULAR_FAILED";

export const MATRICULAR = "[CLASS] MATRICULAR";
export const MATRICULAR_SUCCESS = "[CLASS] MATRICULAR_SUCCESS";
export const MATRICULAR_FAILED = "[CLASS] MATRICULAR_FAILED";

export const VALIDAR = "[CLASS] MATRICULAR";
export const VALIDAR_SUCCESS = "[CLASS] VALIDAR_SUCCESS";
export const VALIDAR_FAILED = "[CLASS] VALIDAR_FAILED";


export function createClass(data, callback) {
    return async (dispatch, getState) => {
        dispatch({type: CREATE_CLASS});

        try {

            const {user} = getState().user;
            const response = await api.post("/turma", {...data, diretor: user._id});

            if (response.data) {
                dispatch({type: CREATE_CLASS_SUCCESS, payload: response.data});
                dispatch(refresh());
                return callback && callback(null, response.data);
            } else {
                dispatch({type: CREATE_CLASS_FAILED});
                return callback && callback(new Error("failed register"));
            }

        } catch (e) {
            dispatch({type: CREATE_CLASS_FAILED});
            return callback && callback(e);
        }

    }
}

export function readClass(callback) {
    return async (dispatch, getState) => {
        dispatch({type: READ_CLASS});

        try {
            const {token} = getState().user;

            const response = await api.get(`/turma`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            if (response.data) {
                dispatch({type: READ_CLASS_SUCCESS, payload: response.data});
                dispatch(refresh());
                return callback && callback(null, response.data);
            } else {
                dispatch({type: READ_CLASS_FAILED});
                return callback && callback(new Error("Read Failed"));
            }

        } catch (e) {
            dispatch({type: READ_CLASS_FAILED});
            return callback && callback(e);
        }

    }
}

export function matricular(data, callback) {
    return async (dispatch, getState) => {
        dispatch({ type: MATRICULAR });

        try {
            const { token } = getState().user;

            const response = await api.post("/turma/matricular", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            dispatch({type: MATRICULAR_SUCCESS});
            dispatch(refresh());
            return callback && callback(null, response.data);

        } catch (e) {
            dispatch({type: MATRICULAR_FAILED});
            return callback && callback(e);
        }

    }
}
