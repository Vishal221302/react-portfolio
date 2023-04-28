import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Custom.css';
import {Link} from 'react-router-dom'
import { FaMobileAlt, FaCode, FaRegFileImage } from "react-icons/fa";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { AiFillEnvironment } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Services() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg='black' variant='dark'>
      <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="jgvj">
            <Nav.Link className='link_List'> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link className='link_List'><Link to='/about' >About Me</Link></Nav.Link>
            <Nav.Link className='link_List' > <Link to='/services'> Services</Link></Nav.Link>
            <Nav.Link className='link_List'> <Link to='/portfolio'>My Portfolio</Link> </Nav.Link>
            <Nav.Link className='link_List' > <Link to='/contact'>Contact</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section  >
      <div className='container'>
        <div className='row'>
          <div className='services'>My Services</div>
          <div className='sub_Tiile'>Better Design , Better Experience</div>
          <div className='col-md-4'>
            <div className='cart'>
              <div className='cart_Icon'><FaMobileAlt style={{ fontSize: "30px", color: "#dc3545" }} /></div>
              <div className='cart-heading'>Mobile Design</div>
              <div className='cart_decr'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='cart'>
              <div className='cart_Icon'><FaCode style={{ fontSize: "30px", color: "#dc3545" }} /></div>
              <div className='cart-heading'>Website Design & Development</div>
              <div className='cart_decr'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='cart'>
              <div className='cart_Icon'><FaRegFileImage style={{ fontSize: "30px", color: "#dc3545" }} /></div>
              <div className='cart-heading'>Graphic Design</div>
              <div className='cart_decr'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className='border'></div>
      <section >
        <div className='container'>
          <div className='row'>
            <div className='col-4 '>
              <div className='footer'>About</div>
              <div className='about'>
                The passage experienced a surge in popularity during the 1960s when Letraset used it on
                their dry-transfer sheets, and again during the 90s as desktop publishers bundled
                the text with their software.
              </div>
              <div className='soical-link'>
                <div className='soical-Icon'>
                  <a className='icons' href='#'><FaFacebook /></a>
                </div>
                <div className='soical-Icon'>
                  <a className='icons' href='#'><FaTwitter /></a>
                </div>
                <div className='soical-Icon'>
                  <a className='icons' href='#'><FaInstagram /></a>
                </div>
                <div className='soical-Icon'>
                  <a className='icons' href='#'><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
            <div className='col-4 text-center'>
              <div className='footer'> Links</div>
              <div className='link'>Home</div>
              <div className='link'>About</div>
              <div className='link'>service</div>
              <div className='link'>My Portfolio</div>
              <div className='link'>Contact</div>
            </div>
            <div className='col-4'>
              <div className='footer' >Address</div>
              <div><AiFillEnvironment className='footer-icon' /> Block: E-155, Sector 63,  Noida  UP, India</div>
              <div ><BiPhoneCall className='footer-icon' /> +91 123 456 7890 </div>
              <div><BiMailSend className='footer-icon' />patelvishal2350@mail</div>
              <iframe style={{ width: "100%", margin: "20px 0px 30px 0px" }} class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=E-155, E Block, Sector 63, Noida, Uttar Pradesh 201301&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='Bottom-footer'>
        <div className='footer-dics' >2022 Copyright: React js Personal Website</div>

      </section>


    </>
  )
}
