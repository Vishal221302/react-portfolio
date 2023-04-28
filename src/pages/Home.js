import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Custom.css';
import { FaMobileAlt, FaCode, FaRegFileImage } from "react-icons/fa";
import { AiFillEnvironment  } from "react-icons/ai";
import emailjs from 'emailjs-com';
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaFacebook,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Home() {


  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it


    emailjs.sendForm('service_54w9nvo', 'template_eq6sxsm', e.target, '5sH5HEAD-aOHOt7-k')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  return (<>
    <Navbar collapseOnSelect expand="lg" bg='black' variant='dark'>
      <Container >
        <Navbar.Brand href="#home">Vishal Patel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="jgvj">
            <Nav.Link className='link_List '> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link className='link_List'><Link to='/about' >About Me</Link></Nav.Link>
            <Nav.Link className='link_List' > <Link to='/services'> Services</Link></Nav.Link>
            <Nav.Link className='link_List'> <Link to='/portfolio'>My Portfolio</Link> </Nav.Link>
            <Nav.Link className='link_List' > <Link to='/contact'>Contact</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='backGround' >
      <div className='container '>
        <div className='row justify_text'>
          <div className='col-md-6'>
            <div className='Main_text'>
              <p style={{ color: "#e74c3c" }}>Hello</p>
              <h1 style={{ fontSize: "60px", color: "white" }} >I'M Vishal <br />Pa<span style={{ color: "#e74c3c" }}>tel</span></h1>
              <p style={{ color: "#ffff", fontWeight: "700" }}>Front-End and Backend Developer</p>
            </div>
            <Link to={'/about'} >
            <div className='btn btn-danger' >Here Me</div>
            </Link>
          </div>
          <div className='col-md-6'>
          </div>
        </div>
      </div>
    </section>
    <section  id='about'>
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
    <section id='services'  >
      <div className='container'>
        <div className='row My-Services'>
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
    <section  id='portfolio'>
      <div className='container'>
        <div className='row  rvsju'>
          <div className='services'>My Prortfolio</div>
          <div className='sub_Tiile'>Some  of the my Distinguished work</div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='jhjj'>
                <img className='vybjm' src='https://miro.medium.com/max/870/1*asy6jnpKKIhQh0zNQL99_g.png' />
              </div>
              <div className='development'>Development</div>
              <div className='descr'>Mobile App Landing design & service</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='jhjj'>
                <img className='vybjm' src='https://miro.medium.com/max/870/1*asy6jnpKKIhQh0zNQL99_g.png' />
              </div>
              <div className='development'>Development</div>
              <div className='descr'>Mobile App Landing design & service</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='jhjj'>
                <img className='vybjm' src='https://miro.medium.com/max/870/1*asy6jnpKKIhQh0zNQL99_g.png' />
              </div>
              <div className='development'>Development</div>
              <div className='descr'>Mobile App Landing design & service</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='jhjj'>
                <img className='vybjm' src='https://miro.medium.com/max/870/1*asy6jnpKKIhQh0zNQL99_g.png' />
              </div>
              <div className='development'>Development</div>
              <div className='descr'>Mobile App Landing design & service</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='jhjj '>
                <img className='vybjm' src='https://miro.medium.com/max/870/1*asy6jnpKKIhQh0zNQL99_g.png' />
              </div>
              <div className='development'>Development</div>
              <div className='descr'>Mobile App Landing design & service</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='box'>
              <div className='jhjj'>
                <img className='vybjm' src='https://miro.medium.com/max/870/1*asy6jnpKKIhQh0zNQL99_g.png' />
              </div>
              <div className='development'>Development</div>
              <div className='descr'>Mobile App Landing design & service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className=' footer-border' id='contact' >
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
    </section>
    <div className='border'></div>
    <section>
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
              <a className='icons' href='#'><FaFacebook/></a>
              </div>
              <div className='soical-Icon'>
              <a  className='icons' href='#'><FaTwitter/></a>
              </div>
              <div className='soical-Icon'>
              <a className='icons' href='#'><FaInstagram/></a>
              </div>
              <div className='soical-Icon'>
              <a className='icons' href='#'><FaLinkedinIn/></a>
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
            <div ><BiPhoneCall className='footer-icon'/> +91 123 456 7890 </div>
            <div><BiMailSend className='footer-icon'/>patelvishal2350@mail</div>
              <iframe style={{width:"100%", margin:"20px 0px 30px 0px"}} class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=E-155, E Block, Sector 63, Noida, Uttar Pradesh 201301&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>
      </div>
    </section>
    <section className='Bottom-footer'>
      <div className='footer-dics' >2022 Copyright: React js Personal Website</div>

    </section>
    
  </>
  );
}

export default Home;  