import React from 'react';
import Carousel from '../../../node_modules/react-bootstrap/Carousel';


class Slider  extends React.Component{

    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }

      createCarouselItems(props){
        let quotes = Object.values(props)
        let items = quotes.map( (quote)=> {return(
                          <Carousel.Item>
                            <Carousel.Caption>
                              <span className="slideText">{quote.quote}</span>
                              <div className="actorSlideStat">
                                <div className="actorSlideImage">TS</div> 
                                <div className="actorStatistics"> 
                                  <h5>{quote.actorName}</h5>
                                  <p> Grammy wins: {quote.grammyWins}</p>   
                                  <p> Grammy Nominations: {quote.grammyNominations}</p>   
                                </div>  
                              </div>
                            </Carousel.Caption>
                          </Carousel.Item> )})
      
        return(
           items
        )
      
      }

      
      render() {


        return (
          <div className='slider'>
          <h3 className="title">FEATURE INVITEES</h3>
          <Carousel className="slider"
            interval={null}>
            
            {this.createCarouselItems(this.props.data)}

          </Carousel>
          </div>
        );
      }
    
}

export default Slider;

