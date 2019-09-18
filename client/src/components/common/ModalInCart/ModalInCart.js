import React from 'react';
import { UncontrolledAlert, Collapse, Button, Card, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PropTypes } from 'prop-types';

class ModalInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      collapseSuccess: false,
      collapseWarning: false,
      modal: false,
    };
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    const { discountCode, handleDiscountCode, discountStatus } = this.props;

    if(!discountStatus) {

      if(discountCode === this.state.value) {
        this.setState({ collapseSuccess: true });
        handleDiscountCode();
      } else {
        this.setState({ collapseWarning: true });
      }

    }

    event.preventDefault();
  }

  toggleModal = () => {
    const { modal } = this.state;
    const modalToggle = !modal;

    this.setState({ modal: modalToggle })
  }

  toggleCollapse = () => {
    this.setState({ collapseSuccess: false, collapseWarning: false });
  }

  render() {
    const { buttonLabel, discountStatus } = this.props;
    const { value, collapseSuccess, collapseWarning, modal } = this.state;

    return (
      <div className="Modal">
        <Button outline color="secondary" className={discountStatus ? 'd-none' : 'd-block'} onClick={this.toggleModal}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={this.toggleModal} modalTransition={{ timeout: 500 }} backdropTransition={{ timeout: 500 }}>
          <ModalHeader toggle={this.toggleModal}>Kod rabatowy</ModalHeader>
          <ModalBody className="ModalBody">
            Wpisz swój kod rabatowy:
              <input type="text" value={value} onChange={this.handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit} className={discountStatus ? 'd-none' : 'd-block'}>Zatwierdź</Button>
            <Button color="secondary" onClick={this.toggleModal}>Wyjdź</Button>
          </ModalFooter>
          <Collapse isOpen={collapseSuccess}>
            <Card>
              <UncontrolledAlert color="success">
                Super! Twoja cena zostanie pomniejszona o 20%!
              </UncontrolledAlert>
            </Card>
          </Collapse>
          <Collapse isOpen={collapseWarning}>
            <Card>
              <UncontrolledAlert color="warning">
                To nie jest dobry kod :( Może spróbuj jeszcze raz?
              </UncontrolledAlert>
            </Card>
          </Collapse>
        </Modal>
      </div>
    );
  }
}

ModalInCart.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  discountStatus: PropTypes.bool.isRequired,
  discountCode: PropTypes.string.isRequired,
  handleDiscountCode: PropTypes.func.isRequired
}

export default ModalInCart;