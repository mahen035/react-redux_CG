const INITIAL_STATE = []

const fetchPostsReducer = (state= INITIAL_STATE, action) =>{
    state = action.payload;
    return state;
}

export default fetchPostsReducer;
