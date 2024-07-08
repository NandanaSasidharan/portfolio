import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import i from '../assets/img/i.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../Components/header.css'
import Modes from './Modes';
function Header () {
  const[activeLink,setActiveLink]= useState('home');
  const[scrolled,seScrolled] = useState(false);
  useEffect(()=>{
   const onScroll=()=>{
    if (window.scrollY >50) {
      seScrolled(true);
       }else{
        seScrolled(false);
       }
   }
   window.addEventListener("scroll",onScroll);
   return()=>window.removeEventListener("scroll",onScroll);
  },[])
  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }
  
  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled":""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-letter-n-logo-design-png-png-image_5687381.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink==='link'?'active navbar-link':'navbar-link'}  onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Project" className={activeLink==='projects'?'active navbar-link':'navbar-link'}  onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
           
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
            <a href="https://www.linkedin.com/in/nandana-sasidharan-7b1a64288/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/NandanaSasidharan"><img src={i} alt="" /></a>
                <a href="https://www.instagram.com/nanz_anz?igsh=Y3c0NGp6MnJmczhu"><img src={navIcon3} alt="" /></a>
            </div>
           
            <button className='vvd btn btn-primary rounded-6px' ><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header