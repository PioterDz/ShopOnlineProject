import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PropTypes } from 'prop-types';

const ModalHomePage = (props) => {

  const { content, closeModal, modal } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={closeModal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}>
        <ModalHeader className="ModalHeader" toggle={closeModal}>TYLKO DZISIAJ!</ModalHeader>
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


ModalHomePage.propTypes = {
    content: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired
}

export default ModalHomePage;