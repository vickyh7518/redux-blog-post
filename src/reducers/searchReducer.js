export default (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}