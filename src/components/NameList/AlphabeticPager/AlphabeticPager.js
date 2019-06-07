
import React from 'react';

function AlphabeticPager(props){

  let AlphabeticPagerButtons = [];
  let letters =  props.data;
  
  for(let i in letters){
    AlphabeticPagerButtons.push(
      <div className = { props.selectedLetter === letters[i] ? 'indexButton selected' : 'indexButton'}
            value={letters[i]} 
            key={i}  
            onClick = {() => props.onClick(letters[i])}> 
        {letters[i]}
      </div>)
  }

  return(
      <div className="alphaPager">
        <div className = { props.selectedLetter === 'all' ? 'indexButton selected' : 'indexButton'} value='all' key='all' 
              onClick = {() => props.onClick("all")}>ALL</div>
        {AlphabeticPagerButtons}
      </div>  
  )
}

export default AlphabeticPager;
