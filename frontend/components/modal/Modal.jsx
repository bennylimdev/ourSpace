import React, { useState } from 'react';
// dependencies: EditPost, CreatePost, DeletePost, EditComment, EditProfile, EditCoverPhoto

const Modal = ({ onCloseButtonClick }) => {
  
  return (
    <div className='modal-overlay'>
        <div className='modal'>
          <span className="modal-close" onClick={onCloseButtonClick}>
            &#10005; {/* HTML code for a multiplication sign */}
          </span>
          <span>Hello Modal</span>
        </div>
    </div>
  )
};

export default Modal;