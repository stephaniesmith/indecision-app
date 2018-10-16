import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  const { selectedOption, handleClose } = props;

  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClose}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={handleClose}>Okay</button>
    </Modal>
  );
}

export default OptionModal