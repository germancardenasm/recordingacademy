import React, {Component} from 'react';
import Pager from './Pager/Pager.js'
import AlphabeticPager from './AlphabeticPager/AlphabeticPager';
import Table from './Table/Table';
import Results from "./Results/Results";


class NameList extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedLetter: "all",
            selectedPage: 1,
            completeArtistsList: this.props.listOfArtists,
            shownListData: this.props.listOfArtists,
            nameListlength: this.props.listOfArtists.length,
            rowsperPage: 12,
            index: [],
        }
        this.getInitials = this.getInitials.bind(this)
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
      this.setState({
          index: Array.from(index),
      })
    }

    filterList(){
      let filteredArtists =[];
      if(this.state.selectedLetter!=="all")
            filteredArtists = this.state.completeArtistsList.filter( d => d.lastName[0]===this.state.selectedLetter);
      else
            filteredArtists = this.state.completeArtistsList;

      this.setState({
          shownListData: filteredArtists,
          nameListlength: filteredArtists.length,
      })
    }
    
    static getDerivedStateFromProps(props, state){
  
      if(props.listOfArtists !== state.completeArtistsList) {
        console.log('componentDidUpdate just updated this.state');
        return {
          completeArtistsList: props.listOfArtists,
          shownListData: props.listOfArtists,
          nameListlength: props.listOfArtists.length,
        } 
    
       }
       console.log('NameList no need to Update');
       return null
  
    }

    componentDidMount(){
      this.getInitials();
      console.log('NameList did Mount');
    }
    

    render(){
        
        console.log("NameList is rendering")
        return (
            <div className='namelist-container'>
              <h3 className="title section-main-title">Recording Academy Member Class Of 2019 List</h3>
              <AlphabeticPager  data={this.state.index} 
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




export default NameList;