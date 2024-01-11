import React from 'react';

import EditPostFormContainer from './EditPostFormContainer';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  };

  close(){
    this.props.hideModal();
  }

  render(){
    const { modal } = this.props;

    if(!modal) {
      return null;
    };

    let form;
    
    switch(modal) {
      case 'editpost':
        form = <EditPostFormContainer />
        break;
      default:
        return null;
    };

    return (
      <div className='modal-overlay' onClick={this.close}>
        <div className='modal' onClick={e => e.stopPropagation()}>
            { form }
        </div>
      </div>
    );
  }
};

export default Modal;
