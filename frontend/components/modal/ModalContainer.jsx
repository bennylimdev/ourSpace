import { connect } from 'react-redux';
import Modal from './Modal';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    modal: state.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);