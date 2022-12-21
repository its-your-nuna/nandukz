import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Example({setShow,show}) {

  const handleClose = () => setShow(false);

  return (
    <>
    
      <Modal
        style={{marginTop:'100px',backgroundColor:'success'}}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          
          <Modal.Body>
          Ваше сообщение успешно доставлено!
        </Modal.Body>
       
        </Modal.Header>
        
      </Modal>
    </>
  );
}
