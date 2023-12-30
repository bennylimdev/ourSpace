import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const initialState = {
    modal: false
};

const ModalReducer(state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign(state);
    
    switch(action.type) {
        case SHOW_MODAL:
            nextState.modal = true;
        case HIDE_MODAL:
            nextState.modal = false;
        default:
            return state;
    }
};

export default ModalReducer;