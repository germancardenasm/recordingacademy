import  React  from 'react';
import Image from 'react-bootstrap/Image';
import grammy from '../../img/GRAMMY_FinalRendering_White_01_101818_t.png';

function Header(props){
    return(
      <div className="header">
        <div className="rectangle_bg bg-color-gradient" /> 
        <div className="main-content bg-color-black  " >
          <h1 className="main-title">{props.data.headerFistLine}</h1>
          <h2 className="main-header-tx tx-color-gradient">{props.data.headerTitle}</h2> 
          <h2 className="huge tx-color-gradient">{props.data.headerTitleYear} </h2>
          
          <p className="main-content-text">{props.data.headerTextContent}
          </p>
        </div>
        <Image className="grammy-img" src={grammy}/>
      </div>
    )
}

export default Header;

