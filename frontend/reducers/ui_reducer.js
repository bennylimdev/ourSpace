import { combineReducers } from 'redux';

import ModalPostInfoReducer from './modal_post_info_reducer';
import ModalReducer from './modal_reducer';
import ModalUserInfoReducer from './modal_user_info_reducer';

const UIReducer = combineReducers({
    modal: ModalReducer,
    postId: ModalPostInfoReducer,
    userId: ModalUserInfoReducer
});

export default UIReducer;