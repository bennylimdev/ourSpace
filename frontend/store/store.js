import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const createStore = (preloadedState = {}) => (
    configureStore(
        RootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default createStore;

