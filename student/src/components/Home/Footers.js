import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
      <footer className='foot'>
          <div className="footer-content">
              <h3>Cochin University of Science and Technology</h3>
              <p>The University’s basic philosophy and goals find eloquent expression in its coat of aims
emblazoning the motto Tejasvi navadhitamastu. In essence it means May learning illumine
us both (the teacher and the taught). The rising sun together with the coconut palm
represents the birth of a new centre of learning in the land of Kerala. The book represents
learning the factory its application and the transmission tower its centre of learning, that of
fostering study and research in Applied Science, Technology, Industry, Commerce,
Management and Social Science and the transference of such knowledge for the
betterment of humanity.</p>
              <ul className="socials">
                  <li><a href="https://www.facebook.com/officialcusat/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="https://twitter.com/CUSAT"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="https://cusat.ac.in/"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                  <li><a href="https://www.youtube.com/channel/UCdfo9bvqrz_kvv3SK9wWEDw"><FontAwesomeIcon icon={faYoutube} /></a></li>
                  <li><a href="https://in.linkedin.com/school/cochin-university-of-science-and-technology/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
          </div>
          <div className="footer-bottom">
              <p>copyright &copy; Namitha Manoj, Riya Shaji & Shriya B </p>
              <div className="footer-menu">
                  <ul className="f-menu">

                  <li>Contact 1: +919447183772</li>
                      <li>Contact 2: +918078201835</li>
                      
                  </ul>
              </div>
          </div>
      </footer>
  );
};

export default Footer;