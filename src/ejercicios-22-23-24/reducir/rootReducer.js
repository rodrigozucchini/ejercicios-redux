import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

const rootReduce = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer
    }
)