import React from 'react';
import Image from 'react-bootstrap/Image';
import membership_img from "../../img/membership_img.png";

function Membership(props){
    return(
        <div className="membership">
            <Image className="img_member" src={membership_img} fluid/>
            <div className=" rectangle_member bg-color-gradient back mr-bottom mr-right" ></div>
            <div className=" content_member bg-color-black mr-bottom " >
                <div className="content_member_text">
                    <h3 className="title">{props.data.title}</h3>
                    <p className="main-content-text"> {props.data.textContent}  </p>
                    </div>
            </div>
        </div>
    )
}

export default Membership;