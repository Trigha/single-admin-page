import { combineReducers } from "redux";

import ListGenre from './getGenreReducer'
import ListMovie from './getMovieReducer'

const rootReducer = combineReducers({
    ListGenre, ListMovie
})

export default rootReducer;