import React from 'react';

function Results(props) {
  return(
    <div className='results'>
        <span className='bold'>{props.selectedLetter.toUpperCase()}: </span> <span className='results'> {props.results} results</span>
    </div>
  )
}

export default Results;