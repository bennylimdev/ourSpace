export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = form => ({
    type: SHOW_MODAL,
    form
});

export const hideModal = () => ({
    type: HIDE_MODAL
});
