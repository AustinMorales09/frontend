import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Attraction = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
      <div className='text-center mt-4 mx-2 border rounded bg-light'>
        <h5>{props.cincy.name}</h5>
        <p>{props.cincy.description}</p>
        <img className='attractionsImg' src={props.cincy.imgURL} alt='otr' />
        <p>{props.cincy.hours}</p>
        <p>{props.cincy.number}</p>
        <p>{props.cincy.rating}</p>
        <p>{props.cincy.pricing}</p>
        <p>{props.cincy.category}</p>
  

        <Button variant='primary' onClick={handleShow}>
        Open Details
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.cincy.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            <li>Address: {props.cincy.address}</li>
            <li>Phone number: {props.cincy.number}</li>
            <li >Hours: {props.cincy.hours}</li>
            <li >rating: {props.cincy.rating}</li>
            <li >events: {props.cincy.events}</li>
            {/* Add more details based on your data structure */}
            <li>{props.cincy.website}</li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  };
  

export default Attraction;
