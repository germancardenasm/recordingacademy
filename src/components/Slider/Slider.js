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
    
      render() {
        const { index, direction } = this.state;

        return (
          <Carousel className="slider"
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            interval={null}>
            <Carousel.Item>
              <Carousel.Caption>
                <h3 className="title">FEATURE INVITEES</h3>
                <span className="slideText">{this.props.data[1].quote}</span>
                <div className="actorSlideStat">
                  <div className="actorSlideImage">TS</div> 
                  <div className="actorStatistics"> 
                      <h5>{this.props.data[1].actorName}</h5>
                      <p> Grammy wins: {this.props.data[1].grammyWins}</p>   
                      <p> Grammy Nominations: {this.props.data[1].grammyNominations}</p>   
                  </div>  
                </div>
              </Carousel.Caption>
            </Carousel.Item>
           
            
            <Carousel.Item>
              <Carousel.Caption>
                <h3>FEATURE INVITEES</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
    
              <Carousel.Caption>
                <h3>FEATURE INVITEES</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item> 
          </Carousel>
        );
      }
    
}



export default Slider;
