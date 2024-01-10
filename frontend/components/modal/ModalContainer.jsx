import { connect } from 'react-redux';
import Modal from './Modal';
import { hideModal } from '../../actions/modal_actions';

const mSTP = state => ({
    errors: state.errors,
    modal: state.modal
});

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(Modal);

// show: state.modal.show,
// title: state.modal.title,
// description: state.modal.description,