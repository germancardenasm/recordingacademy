import React from 'react';
import Image from 'react-bootstrap/Image';
import grammyWinnerLogo from '../../img/GrammyWinner.png';
import arrowRight from '../../img/arrow-right.png';
import arrowLeft from '../../img/arrow-left.png';
import artists from './artistsList.js';

class NameList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            selectedLetter: "all",
            selectedPage: 1,
            data: this.props.listOfArtists,
            shownListData: this.props.listOfArtists,
            nameListlength: this.props.listOfArtists.length,
            rowsperPage: 12,
            index: [],
        }
    }

    AlphabethicOnClickHandler(data){
      this.setState({
        selectedPage: 1,
      });

        if(data==="all"){
            this.setState({
                selectedLetter: 'all',
            }, ()=> this.filterList());
        } else {
            this.setState({
                selectedLetter: data,
            }, ()=> this.filterList());
        }
    }

    indexOnClickHandler(data) {
      this.setState({
        selectedPage: data,
      }, ()=> this.filterList()); 
    }

    getInitials(){  
      let data = this.state.shownListData;
      let index = new Set();
      for(let i in data) 
          index.add(data[i].lastName[0].toUpperCase());
      return Array.from(index);
      this.setState({
          index: Array.from(index),
      })
    }

    filterList(){
      let filteredArtists =[];
      if(this.state.selectedLetter!=="all")
            filteredArtists = this.state.data.filter( d => d.lastName[0]===this.state.selectedLetter);
      else
            filteredArtists = this.state.data;

      this.setState({
          shownListData: filteredArtists,
          nameListlength: filteredArtists.length,
      })
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
      //this.getInitials();
      const newProps = this.props
      if(prevProps.listOfArtists !== newProps.listOfArtists) {
        this.setState( {
          data: newProps.listOfArtists,
          shownListData: newProps.listOfArtists,
          nameListlength: newProps.listOfArtists.length,
        } )
        console.log('componentDidUpdate just updated this.state');
       }
      console.log('NameList did Update');
    }

    componentDidMount(){
      //this.getInitials();
      console.log('NameList did Mount');
    }
    

    render(){
        let initialsForPager = this.getInitials();
        return (
            <div className='namelist-container'>
              <h3 className="title section-main-title">Recording Academy Member Class Of 2019 List</h3>
              <AlphabeticPager  data={initialsForPager} 
                                selectedLetter={this.state.selectedLetter} 
                                onClick={(data) => this.AlphabethicOnClickHandler(data)} />
              <Table            data={this.state.shownListData} 
                                selectedPage={this.state.selectedPage} 
                                nameListlength={this.state.nameListlength} 
                                rowsperPage={this.state.rowsperPage}/>
              <Results          selectedLetter= {this.state.selectedLetter} 
                                results={this.state.shownListData.length}/>
              <Pager            selectedPage={this.state.selectedPage} 
                                nameListlength={this.state.nameListlength} 
                                rowsperPage={this.state.rowsperPage} 
                                onClick={(data) => this.indexOnClickHandler(data)}/>
            </div>
        )
    }
}

function AlphabeticPager(props){
    return(
        <div className="alphaPager">
          <div className = { props.selectedLetter == 'all' ? 'indexButton selected' : 'indexButton'} value='all' key='all' 
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

function Table(props){
  return(
      <div className='nameTable'>
          <TableRows data={props.data} selectedPage={props.selectedPage} nameListlength={props.nameListlength} rowsperPage={props.rowsperPage}/>
      </div>
  )
}

function TableRows(props) {
  let rows = []; 

  if(props.data.length > 0){
    let rowsToPrint =  (props.selectedPage*props.rowsperPage);
    if(isLastPage(props))
      rowsToPrint -= (props.rowsperPage  - props.nameListlength % props.rowsperPage)

    for(let index = (props.selectedPage-1)*props.rowsperPage ; index < rowsToPrint; index++){
        rows.push(<ListItem data={props.data[index]} key={index}/>)
    }
    
  }
  return rows;
}

function isLastPage(props){
  let lastPage =  Math.ceil(props.nameListlength / props.rowsperPage);
  return lastPage === props.selectedPage;
}

function ListItem(props){
  return(
    <div className='listItem'> 
      <span className='list Items firstName'>{props.data.name}</span> <span className='list Items lastName'>{props.data.lastName}</span>
      <span className="listItem-icons" style={{display: props.data.grammyWinner ? 'inline-block' : 'none'}}>   
      <Image className="grammyWinnerImage" src={grammyWinnerLogo}/>
      <a className="control-next" role="button" href="#">
        <Image className="control-next-icon" src={arrowRight}/> 
      </a>
      </span>
    </div>
  )
}

function Results(props) {
  return(
    <div className='results'>
        <span className='bold'>{props.selectedLetter.toUpperCase()}: </span> <span className='results'> {props.results} results</span>
    </div>
  )
}

function Pager(props){
  return(
    <div className='pager-container'>
      <a className=" control-arrow" role="button" href="#" value='back'>
            <Image className="control-next-icon" src={arrowLeft}/> 
      </a>
      <PagerButtons selectedPage={props.selectedPage} nameListlength={props.nameListlength} rowsperPage={props.rowsperPage} onClick={(data) => props.onClick(data)}/>
      <a className=" control-arrow" role="button" href="#" value='next'>
            <Image className="control-next-icon" src={arrowRight}/> 
      </a>
    </div>
  )
}

function PagerButtons(props){
  let buttons = [];
  let qtyOfButtons =  Math.ceil(props.nameListlength / props.rowsperPage);
    
  for(let i= 1; i <= qtyOfButtons; i++){
    buttons.push(
      <a className = { props.selectedPage === i ? 'selected' : ''}
            value={i} 
            key={i}  
            onClick = {() => props.onClick(i)}> 
        {i}
      </a>)
  }
  return buttons;
}

export default NameList;