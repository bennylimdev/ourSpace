import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const initialState = {
    title: '',
    description: '',
    show: false
};

const ModalReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case SHOW_MODAL:
            nextState.show = true
            return nextState
        case HIDE_MODAL:
            nextState.show = false
            return nextState
        default:
            return state;
    }
};

export default ModalReducer;