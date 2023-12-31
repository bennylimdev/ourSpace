import { removeErrors } from './auth_actions';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = form => ({
    type: SHOW_MODAL,
    form
});

const hideModal = () => ({
    type: HIDE_MODAL
});

export const hideModaltest = () => {
    return (dispatch) => {
        dispatch(hideModal());
        dispatch(removeErrors());
    };
};