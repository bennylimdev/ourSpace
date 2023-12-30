import React, { useState } from 'react';
// dependencies: EditPost, CreatePost, DeletePost, EditComment, EditProfile, EditCoverPhoto

const Modal = ({ error, modal, hideModal }) => {

  if(!modal) {
    return null;
  }

  return (
    <div className='modal-overlay'>
        <div className='modal'>
          <span className="modal-close" onClick={hideModal}>
            &#10005; {/* HTML code for a multiplication sign */}
          </span>
          <span>Hello Modal</span>
        </div>
    </div>
  )
};

export default Modal;