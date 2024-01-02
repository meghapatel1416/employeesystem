import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LanguageContex1 from '../pages/LanguageContex1';

export default function ApplicationNav() {

const {lan,setlan} =  useContext(LanguageContex1)
  const handleLan = (e)=>{

    setlan(e.target.value);
  }
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
</svg>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link}  to="#home">Home</Nav.Link>
        <Nav.Link as={Link} to='/'>Registration</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link >
          
          <select onChange={handleLan}>

            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="gj">Gujrati</option>
          </select>
          
        </Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  )
}