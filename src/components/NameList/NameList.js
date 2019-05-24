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
            shownListData: nominee,
            NameListlength: nominee.length,
            index: [],
        }
    }

    onClickHandler(data){
        if(data==="all"){
            this.setState({
                selectedLetter: 'all',
            });
        } else {
            this.setState({
                selectedLetter: data,
            });
        }
      
    }

    getInitials(){
        let data = this.state.shownListData;
        let index = new Set();
        for(let i in data) 
            index.add(data[i][0].lastName[0].toUpperCase());
        
        this.setState({
            index: Array.from(index),
        })
    }

    filterList(){
        let filteredArtists =[];
        if(this.state.selectedLetter!=="all")
             filteredArtists = this.state.data.filter( d => d[0].lastName[0]===this.state.selectedLetter);
        else
             filteredArtists = this.state.data;

        this.setState({
            shownListData: filteredArtists,
            NameListlength: filteredArtists.length,
        })
    }
    
    componentDidMount(){
        this.getInitials();
    }

    render(){
        return (
            <div className='namelist-container'>
              <h3 className="title section-main-title">Recording Academy Member Class Of 2019 List</h3>
              <AlphabeticPager data={this.state.index} selectedLetter={this.state.selectedLetter} onClick={(data) => this.onClickHandler(data)} />
              <NameTable data={this.state.shownListData} selectedLetter={this.state.selectedLetter}/>
              <Results selectedLetter= {this.state.selectedLetter} results={this.state.shownListData.length}/>
            </div>
        )
    }
}

function AlphabeticPager(props){
    return(
        <div className="alphaPager">
          <div className = 'indexButton' value='all' key='all' 
               onClick = {() => props.onClick("all")}>ALL</div>
          <AlphabeticButtons selectedLetter={props.selectedLetter} data={props.data} 
               onClick = {(data) => props.onClick(data)}/>
        </div>  
    )
}

function AlphabeticButtons(props) {
    let buttons = [];
    let letters =  props.data;
    
    for(let i in letters){
      buttons.push(
        <div className = { props.selectedLetter == letters[i] ? 'indexButton selected' : 'indexButton'}
             value={letters[i]} 
             key={i}  
             onClick = {() => props.onClick(letters[i])}> 
          {letters[i]}
        </div>)
    }
    return buttons;
}

function NameTable(props){

    let filteredArtists = props.data;

    if(props.selectedLetter!=="all")
         filteredArtists = props.data.filter( d => d[0].lastName[0]===props.selectedLetter);

    return(
        <div className='nameTable'>
            <TableRows data={filteredArtists}/>
        </div>
    )
}

function TableRows(props) {
    let rows = []; 
    for(let index in props.data){
        rows.push(<ListItem data={props.data[index][0]} key={index}/>)
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

function Results(props) {
    
    return(
        <div className='results'>
            <p>{props.selectedLetter.toUpperCase()}: {props.results} results</p>
        </div>
    )
}

export default NameList;