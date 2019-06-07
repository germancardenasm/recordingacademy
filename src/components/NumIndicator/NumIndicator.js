import  React from 'react';

function NumIndicator(props) {
  return(
    <div  className="numIndicator_containter">
      <div className="rectangle_numindicator bg-color-black "><h3 className="title ">{props.name}</h3></div>
      <span className="numIndicator_text tx-color-gradient">{props.data}</span>
    </div> 
  )
}

export default NumIndicator;