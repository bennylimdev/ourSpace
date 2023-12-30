import { connect } from 'react-redux';
import Modal from './Modal';
import { hideModal, showModal } from '../../actions/modal_actions';

const mSTP = state => ({
    error: state.errors,
    modal: state.modal
});

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(Modal);