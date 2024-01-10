import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

// const initialState = {
//     title: '',
//     description: '',
//     show: false
// };

const ModalReducer = (state = null, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SHOW_MODAL:
            return action.form;
        case HIDE_MODAL:
            return null;
        default:
            return state;
    }
};

export default ModalReducer;