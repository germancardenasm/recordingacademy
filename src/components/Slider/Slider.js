import React from 'react';
import Image from 'react-bootstrap/Image';
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
          >
            <Carousel.Item>
              
              <Carousel.Caption>
                <h3>FEATURE INVITEES</h3>
                <span className="slideText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                <div className="actorSlideStat">
                  <div className="actorSlideImage">TS</div> 
                  <div className="actorStatistics"> 
                      <h5>TOM SMITH</h5>
                      <p> Grammy wins: {1}</p>   
                      <p> Grammy Nominations: {1}</p>   
                  </div>  
                </div>
              </Carousel.Caption>
            </Carousel.Item>
{/*             <Carousel.Item>
    
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
            </Carousel.Item> */}
          </Carousel>
        );
      }
    
}

export default Slider;
