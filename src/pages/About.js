import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Custom.css';
import { Link } from 'react-router-dom'
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { AiFillEnvironment } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


export default function About() {
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

      <section id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src='' />
            </div>
            <div className='col-md-6'>
              <div className='About'>
                <div className='About-Heading'>About Me</div>
                <p className='text-white'>Hi, Im Here To Help You Next Project</p>
                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <div className='row my-4'>
                  <div className='col-md-6'>
                    <div className='text-white my-3'>1.Problem Solving</div>
                    <div className='text-white'>2.Creative Idea</div>
                  </div>
                  <div className='col-md-6'>
                    <div className='text-white my-3'>3.Search A Lot</div>
                    <div className='text-white'>3.Hight Quality</div>
                  </div>
                </div>
                <div className='btn btn-danger my-3'>Contact Me</div>
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
