/* Import statements */
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Project from './components/projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap'
import brand from './pictures/brand.jpg'

import {Container, Row, Col,Dropdown } from 'react-bootstrap'
import './style.css'

class Home extends React.Component{
    render(){
        return(
            <Container>
               
                    <Row>
                    <Col md={12}>
                    <h1 className='mt-1 pt-5'> LOOKING FOR A FULL-STACK WEB DEVELOPER?</h1>
                    </Col>
                    
                    </Row>

                    <Row>
                    <Col md={6}>
                    <p id='home' className='text-justify'>
                  Hello!  I am Jeremiah Taguta, a Full-stack Web Developer with a BSc degree in Computer Science 
                  who is  Agile and attentive to detail.

                    </p>
                

                    <Row>
                    <Col md={12}>
                    <h2>
                        TECHNOLOGIES USED
                    </h2>


                    <p id='home' className='text-justify'>
                        <b>FRONTEND:</b> <br /> I employ Javascript, ReactJS, Bootstrap4, HTML5 ,CSS and Adobe XD for web
                        development and design respectively!
                    </p>
                    <hr />

                    <p id='home' className='text-justify'>
                        <b>BACKEND:</b> <br /> I use PHP, Python and Django with MySql, Postgress databases even on Cloud Platforms like AWS and GCP. </p>
                    <hr />
                    </Col>
                    </Row>
                    
                    <Row>
                    <Col md={12}>

                    
                    </Col>
                    </Row>
                    </Col>

                    

                    <Col lg={{offset: 2}} md={{offset: 2}}>
                    <a  href='mailto: tagutaj@gmail.com' target="_blank"  rel="noopener noreferrer">      
                    <img src={brand} className='rounded-circle' alt='Web Developer' width='400' height='400' /> 
                    <button className='btn btn-success btn-md' >Hire!</button>
                    </a>
                    </Col>

                    </Row>                 
               
               
           </Container>
        )
    }
}
/* Home component */



class App extends React.Component {

  render(){
      
  return (
    
    <Router>
    <div>
    <Navbar className='App-navbar' bg="dark"  variant="dark" expand="lg" sticky="top" >
    <Navbar.Brand href='mailto: tagutaj@gmail.com' target="_blank"  rel="noopener noreferrer">
    <button className='btn btn-success btn-lg' >Contact Me!</button>
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
            <Nav.Link  href="/">HOME</Nav.Link>           
            <Nav.Link href='/components/projects'> MY WORK  </Nav.Link>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="links">
          IMPORTANT LINKS
        </Dropdown.Toggle>

        <Dropdown.Menu alignRight>
        <Dropdown.Item href="https://github.com/tagutaj" target="_blank"  
          rel="noopener noreferrer">GitHub</Dropdown.Item>

          <Dropdown.Item href="https://www.linkedin.com/in/jeremiah-taguta-b44ba459" target="_blank"  
          rel="noopener noreferrer">LinkedIn</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
       
      
      <Route  path="/" component={Home} />
      <Route path='/components/projects' component={Project} />
     
      
   </div>
    </Router>
   
  );
}
}

export default App;
