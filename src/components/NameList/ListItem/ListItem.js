import React from 'react';
import Image from 'react-bootstrap/Image';
import grammyWinnerLogo from '../../../img/GrammyWinner.png';
import arrowRight from '../../../img/arrow-right.png';


function ListItem(props){
  return(
    <div className='listItem'> 
      <span className='list Items firstName'>{props.data.name}</span> <span className='list Items lastName'>{props.data.lastName}</span>
      <span className="listItem-icons" style={{display: props.data.grammyWinner ? 'inline-block' : 'none'}}>   
      <Image className="grammyWinnerImage" src={grammyWinnerLogo}/>
      <a className="control-next" role="button" href={props.data.name + " " + props.data.lastName}>
        <Image className="control-next-icon" src={arrowRight}/> 
      </a>
      </span>
    </div>
  )
}

export default ListItem;