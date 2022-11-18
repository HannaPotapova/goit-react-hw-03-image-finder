import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount(){
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDowm);
  };

  componentWillUnmount(){
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDowm);
  };

  handleKeyDowm = e => {
    if (e.code === 'Escape') {
        console.log('Press Escape - close Modal');
        this.props.onClose();
      }
  }

  handleBackdropClick = e => {
    console.log('Click in Backdrop');
    console.log('currentTarget:', e.currentTarget);
    console.log('Target:', e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className={css.Overlay} onClick ={this.handleBackdropClick}>
        <div className={css.Modal}>
          {/* <img src="" alt="" /> */}
          <div>{this.props.children}</div>
        </div>
      </div>, modalRoot
    );
  }
}

export default Modal;
