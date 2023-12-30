import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const ModalReducer = (state = false, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case SHOW_MODAL:
            console.log('bob2')
            return true;
        case HIDE_MODAL:
            console.log('bob3')
            return false;
        default:
            return state;
    }
};

export default ModalReducer;