import React from 'react';

const Option = props => {
  const { option, handleDeleteOption } = props;
  
  return (
    <div>
      {option}
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