import { connect } from 'react-redux';
import Modal from './Modal';

const mSTP = state => ({
    error: state.errors
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(Modal);