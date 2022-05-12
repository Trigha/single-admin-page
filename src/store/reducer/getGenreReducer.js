const initialState = []

const getGenreReducer = (state = initialState, action) => {
    if (action.type === "SET_GENRE") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default getGenreReducer