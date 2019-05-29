import  React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../../img/tra.png';

function  Footer(){

return(
  <div className='footer-container'>
    <div>
      <Image src={logo}/>  
    </div>
   
    <div className='footer-menu'>
      <ul >
        <li> Recordin Academy </li>
        <li>GRAMMYs</li>
        <li>Latin GRAMMYs</li>
        <li>GRAMMY Museum</li>
        <li>MusicCares</li>
        <li>Advocacy</li>
        <li>Membership</li>
      </ul>
    </div>
    <div className='footer-policy'>
      <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Copyright Notice</li>
          <li>Contact Us</li>
        </ul>
    </div>
    <div className='legal-advice'>
        <p>
        Some of the content on this site expresses viewpoints and opinions that are not those of the Recording Academy. 
        Responsibility for the accuracy of information provided in stories not written by or specifically prepared for 
        the Academy lies with the story's original source or writer. Content on this site does not reflect an endorsement 
        or recommendation of any artist or music by the Recording Academy.
        </p>
    </div>

  </div>

)

}

export default Footer;