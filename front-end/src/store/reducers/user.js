import * as actions from "../actions/user";

const initalState = {
    token: "",
    user: {}
}

const reducer = function (state = initalState, { type, payload }) {
    switch (type) {
        default:
            return state;
    }
}

export default reducer;
