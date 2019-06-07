import React from 'react';
import ListItem from '../ListItem/ListItem';

function Table(props){

  let rows = []; 

  if(props.data.length > 0){
    let rowsToPrint =  (props.selectedPage*props.rowsperPage);
    if(isLastPage(props))
      rowsToPrint -= (props.rowsperPage  - props.nameListlength % props.rowsperPage)

    for(let index = (props.selectedPage-1)*props.rowsperPage ; index < rowsToPrint; index++){
        rows.push(<ListItem data={props.data[index]} key={index}/>)
    }
    
  }
  return(
      <div className='nameTable'>
        {rows}
      </div>
  )
}

function isLastPage(props){
  let lastPage =  Math.ceil(props.nameListlength / props.rowsperPage);
  return lastPage === props.selectedPage;
}

export default Table