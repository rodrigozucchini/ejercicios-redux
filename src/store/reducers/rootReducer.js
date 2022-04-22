import { useReducer } from 'react';
import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { todosReducer } from './todosReducer';


export const rootReducer = combineReducers(
    {
        // state name: reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer,
        //ASYNC EJEMPLO (LOGIN USER)
        userState: useReducer
        //... add more states and reducers to inclde then in the store
    }
)