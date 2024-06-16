import { combineReducers } from "redux";
import moviesReducer from "./features/Movies/movieSlice";

const rootReducer = combineReducers({
  movies: moviesReducer
})

export default rootReducer;