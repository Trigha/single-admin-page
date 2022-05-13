const initialState = []

const getMovieReducer = (state = initialState, action) => {
    if (action.type === "SET_MOVIE") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getMovieReducer