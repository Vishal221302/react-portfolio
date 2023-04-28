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
import emailjs from 'emailjs-com';

export default function Contact() {

function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it


    emailjs.sendForm('service_54w9nvo', 'template_eq6sxsm', e.target, '5sH5HEAD-aOHOt7-k')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
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

    <section>
      <div className='container'>
        <div className='row'>
        <div className='About-Heading text-center mb-3'>Contact Us</div>
          <div className='col-md-6'>

            <div style={{ color: "#dc3545" }}>Let's Work Together</div>
            <p style={{ color: "#ffff", margin: "30px 0px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut mauris quis turpis suscipit pretium</p>
            <div className='address hkjkj'>Sector 68 , block-R ,R-105</div>
            <div className='email hkjkj'>patelvisha@mail@mail.com</div>
            <div className='Number hkjkj'> 123 456 7890</div>
          </div>
          <div className='col-md-6'>
          <form className="contact-form" onSubmit={sendEmail}>
              <input className='name' placeholder="Name" type="text" name='name' required />
              <input className='name' placeholder="Email address" type="email" name='email' required/>
              <input  className='name'placeholder="Phone" type="text" name='phone' required/>
              <textarea className='text' placeholder="Message" rows="1" name='subject' ></textarea>
              <button className='send-btn' value="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* <section >
      <div className='container'>
        <div className='row ' >
          <div className='col-md-6'>
            <div className='About-Heading'>Contact Us</div>
            <div style={{ color: "#dc3545" }}>Let's Work Together</div>
            <p style={{ color: "#ffff", margin: "30px 0px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut mauris quis turpis suscipit pretium</p>
            <div className='address hkjkj'>Sector 63 , block-E ,E-155</div>
            <div className='email hkjkj'>patelvishal2350@mail.com</div>
            <div className='Number hkjkj'> +91 8175844601</div>
          </div>
          <div className='col-md-6'>
            <form className="contact-form" onSubmit={sendEmail}>
              <input className='name' placeholder="Name" type="text" name='name' required />
              <input className='name' placeholder="Email address" type="email" name='email' required/>
              <input  className='name'placeholder="Phone" type="text" name='phone' required/>
              <textarea className='text' placeholder="Message" rows="1" name='subject' ></textarea>
              <button className='send-btn' value="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section> */}



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
              <div><AiFillEnvironment className='footer-icon' /> Sector 68 , block-R ,R-105, India</div>
              <div ><BiPhoneCall className='footer-icon' /> +91 123 456 7890 </div>
              <div><BiMailSend className='footer-icon' />patelvishal@mail@mail</div>
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
