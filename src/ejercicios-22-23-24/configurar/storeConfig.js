import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../../store/reducers/rootReducer';

export const createAppStores = () => {
    let store = createStore(rootReducer, composeWithDevTools());

    return store;
}