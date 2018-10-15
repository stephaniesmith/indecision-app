import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  const { selectedOption, handleClose } = props;

  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClose}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleClose}>Okay</button>
    </Modal>
  );
}

export default OptionModal