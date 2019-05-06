import React from 'react';
import Image from 'react-bootstrap/Image';
import grammy from '../../img/GRAMMY_FinalRendering_White_01_101818_t.png';

function Header(props){

    return(
            <div className="header">
                <div className="rectangle bg-color-gradient mr-right mr-top middle" />
                <div className="rectangle bg-color-black mr-left  main-content top" >
                    <h1 className="main-content-text title">{props.data.headerFistLine}</h1>
                    <h2 className="tx-color-gradient main-title">{props.data.headerTitle} 
                    <span className="block huge">{props.data.headerTitleYear} </span>
                    </h2>
                    <p className="main-content-text">{props.data.headerTextContent}
                    </p>
                </div>
                <Image className="grammy-img" src={grammy} fluid/>
            </div>

    )
}

export default Header;

