import React from 'react';
import Image from 'react-bootstrap/Image';
import grammyWinnerLogo from '../../img/GrammyWinner.png';
import arrow from '../../img/arrow-right.png';
import nominee from './data.js';

class NameList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            selectedLetter: "all",
            data: nominee,
        }
    }

    onClickHandler(data){
        console.log(data);
        let filteredArtists = {};

    }



    render(){
        return (
            <div className='namelist-container'>
              <AlphabeticPager data={getInitials(nominee)} onClick={(data) => this.onClickHandler(data)} />
              <NameTable />
            </div>
        )
    }
}

function AlphabeticPager(props){
    return(
        <div className="alphaPager">
          <div className = 'indexButton' value='all' key='all' onClick = {() => props.onClick("all")}>ALL</div>
          <IndexButtons data={props.data} onClick = {(data) => props.onClick(data)}/>
        </div>  
    )
}

function getInitials(data){
    let index = new Set();
    for(let i in data) 
        index.add(data[i].lastName[0].toUpperCase());
    return Array.from(index);
}

function IndexButtons(props) {
    let buttons = [];
    let letters =  props.data;
    for(let i in letters){
        buttons.push(
            <div className = 'indexButton' 
                 value={letters[i]} 
                 key={i}  
                 onClick = {() => props.onClick(letters[i])}> 

                    {letters[i]}

            </div>)
    }
    return buttons;
}

function NameTable(){
    let tableRows = generateTableRows(nominee);
    return(
        <div className='nameTable'>
            {tableRows}
        </div>
    )
}

function generateTableRows(params) {
    let rows = []; 
    for(let index in params){
        rows.push(<ListItem data={params[index]} key={index}/>)
    }
    return rows;
}



function ListItem(props){

    return(
        <div className='listItem'> 
              <span className='firstName'>{props.data.name}</span> <span className='lastName'>{props.data.lastName}</span>
              <span className="listItem-icons" style={{display: props.data.grammyWinner ? 'inline-block' : 'none'}}>   
                <Image className="grammyWinnerImage" src={grammyWinnerLogo}/>
                <a className="control-next" role="button" href="#">
                  <Image className="control-next-icon" src={arrow}/> 
                </a>
            </span>
        </div>
    )
}

export default NameList;