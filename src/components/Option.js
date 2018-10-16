import React from 'react';

const Option = props => {
  const { option, handleDeleteOption, count } = props;
  
  return (
    <div className="option">
      <p className="option__text">{count}. {option}</p>
      <button
        className="button button--link"
        onClick={e => {
          handleDeleteOption(option)
        }}
      >
        remove
      </button>
    </div>
  )
}

export default Option;