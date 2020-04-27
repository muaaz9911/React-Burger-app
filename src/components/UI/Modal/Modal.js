import React from 'react'
import './Modal.css';
import Backdrop from '../Backdrop';

function Modal(props) {

   

  

    return (

        <React.Fragment>

        <Backdrop show={props.show} clicked={props.modalClosed} ></Backdrop>
        <div className='Modal'
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        >
            {props.children}
           
        </div>

        </React.Fragment>
    )
}

export default Modal
