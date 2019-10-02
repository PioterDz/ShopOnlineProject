import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PropTypes } from 'prop-types';

const ModalComponent = (props) => {

  const { content, closeModal, modal, header } = props;

  return (
    <div>
      <Modal className="Modal" isOpen={modal} toggle={closeModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}>
        <ModalHeader className="ModalHeader" toggle={closeModal}>{header}</ModalHeader>
        <ModalBody className="ModalBody">
          {content}
        </ModalBody>
        <ModalFooter className="ModalFooter">
          <Button color="success" onClick={closeModal}>OK!</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


ModalComponent.propTypes = {
    content: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired
}

export default ModalComponent;