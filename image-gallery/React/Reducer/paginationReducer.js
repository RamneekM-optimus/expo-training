
const paginationReducer = (state = 1, action) => {
    if (action.type === "PAGINATION_STATE") {
        state = state + 1;
        return state;
    }
    return state;
};

export default paginationReducer;