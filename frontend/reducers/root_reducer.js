import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import AuthReducer from './auth_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: AuthReducer,
    errors: ErrorsReducer,
    ui: UIReducer
});

export default RootReducer;