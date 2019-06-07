import React from "react";
import arrowRight from '../../../img/arrow-right.png';
import arrowLeft from '../../../img/arrow-left.png';
import Image from 'react-bootstrap/Image';

function Pager(props){
  let pageNumbersButtons = [];
  let qtyOfButtons =  Math.ceil(props.nameListlength / props.rowsperPage);
    
  for(let i= 1; i <= qtyOfButtons; i++){
    pageNumbersButtons.push(
       <div className = { props.selectedPage === i ? 'indexButton selected' : 'indexButton'}
            value={i} 
            key={i}  
            onClick = {() => props.onClick(i)}> 
            {i}
      </div>
    )
  }

  return(
    <div className='pager-container'>
      <a className=" control-arrow" role="button" href="next" value='back'>
        <Image className="control-next-icon" src={arrowLeft}/> 
      </a>
     {pageNumbersButtons}
      <a className=" control-arrow" role="button" href="back" value='next'>
        <Image className="control-next-icon" src={arrowRight}/> 
      </a>
    </div>
  )
}


export default Pager;