import React from 'react';
import ReactDOM from 'react-dom';
import './JitsiModal.css';

const Modal = ({ visible, hide }) => visible ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div id="jitsi-container">
          <iframe
            className='jitsi-meet' 
            src="jitsi.html" 
            title='Jitsi' 
            width='100%' 
            height='100%' 
            allow='camera;microphone'
            allowFullScreen={true}
            frameBorder={0}
            scrolling='no'
            />
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
