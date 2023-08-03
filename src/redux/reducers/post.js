import postActions from "../actions/postActions";

const post = (state = [], action) => {

    if (action.type === postActions.FETCH) {
        console.log(action.payload);
        return action.payload;
    }

    if (action.type === postActions.CREATE) return [...state, action.payload];
    return [];
}

export default post;