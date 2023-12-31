import { connect } from 'react-redux';
import Modal from './Modal';
import { hideModaltest, showModal } from '../../actions/modal_actions';

const mSTP = state => ({
    errors: state.errors,
    show: state.modal.show,
    title: state.modal.title,
    description: state.modal.description
});

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModaltest())
});

export default connect(mSTP, mDTP)(Modal);