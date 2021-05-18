import * as actions from "../actions/class";

const initalState = {
    classItem: {},
    classList: [],
    loading: false,
}

const reducer = function (state = initalState, { type, payload }){
    switch (type) {
        case actions.CREATE_CLASS:
            return {
                ...state,
                loading: true,
            }
        case actions.CREATE_CLASS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actions.CREATE_CLASS_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actions.READ_CLASS:
            return {
                ...state,
                loading: true,
            }
        case actions.READ_CLASS_SUCCESS:
            return {
                ...state,
                loading: false,
                classList: payload
            }
        case actions.READ_CLASS_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actions.UPDATE_CLASS:
            return {
                ...state,
                loading: true,
            }
        case actions.UPDATE_CLASS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actions.UPDATE_CLASS_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actions.VINCULAR:
            return {
                ...state,
                loading: true,
            }
        case actions.VINCULAR_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actions.VINCULAR_FAILED:
            return {
                ...state,
                loading: false,
            }
        case actions.MATRICULAR:
            return {
                ...state,
                loading: true,
            }
        case actions.MATRICULAR_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case actions.MATRICULAR_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;
