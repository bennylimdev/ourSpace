import React, { useState } from 'react';
// dependencies: EditPost, CreatePost, DeletePost, EditComment, EditProfile, EditCoverPhoto
import Errors from './Errors';

const Modal = ({ errors, modal, hideModal }) => {
  const [isErrors, setIsErrors] = useState(false);

  if(errors.length !== 0 && !isErrors) {
    setIsErrors((prevIsErrors => !prevIsErrors));
  }

  if(!modal && !isErrors) {
    return null;
  }

  let form;

  if(isErrors) {
    form = <Errors errors={errors}/>;
  }

  const closeModal = (func) => {
    hideModal();
    setIsErrors((prevIsErrors => !prevIsErrors));
  };

  return (
    <div className='modal-overlay'>
        <div className='modal'>
          <span className="modal-close" onClick={closeModal}>
            &#10005; {/* HTML code for a multiplication sign */}
          </span>
          { form }
        </div>
    </div>
  )
};

export default Modal;