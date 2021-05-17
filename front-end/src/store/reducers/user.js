import * as actions from "../actions/user";

const initalState = {
    token: "",
    user: {},
    typeAccount: "",
    loading: false,
}

const reducer = function (state = initalState, { type, payload }) {
    switch (type) {
        case actions.LOGIN:
            return {
                ...state,
                loading: true,
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                ...payload
            }
        case actions.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actions.REGISTER:
            return {
                ...state,
                loading: true,
            }
        case actions.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actions.REGISTER_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default reducer;
