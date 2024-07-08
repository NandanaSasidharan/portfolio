import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from "../assets/img/header-img.svg";
import './admin.css'

import './header.css';
function Admin () {
  return (
    <div >
        <h1 style={{textAlign:"center"}}>Welcome to my Portfoli</h1>
        <section className='home container pt-5 mt-5'>
        
            <Container>
                <Row>
                    <Col    className='pt-3 m-auto text-center text-md-start'>
                    <div>
                        
                        <h1>Hi! I'm <p style={{ fontFamily: 'Audiowide',fontSize:'60px'}} className='typing-animation'> NandanaSasidharan</p></h1>
                        <h2 className='animated-text '>Full Stack Developer</h2>
                        <div className='d-flex'>
      <p style={{borderLeft:'1px solid grey',padding:'5px'}}>I'm a full stack developer with a passion for crafting seamless digital experiences across both front-end and back-end technologies.</p>
      <a class="btn fs-6 btn-primary rounded-9" href="https://drive.google.com/file/d/1O-Iwn4xD8wr_G8UO0JofDbOQYBpUOipg/view?usp=drivesdk" download="https://drive.google.com/file/d/1O-Iwn4xD8wr_G8UO0JofDbOQYBpUOipg/view?usp=drivesdk" ><i class="fa-solid fa-download fs-5"></i>CV</a>
      </div>   
                    </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
      <img className='animated-image'  src={headerImg} width={'100%'}  alt="" />
      </Col>
                </Row>
            </Container>
        </section>
       
            
            
   </div>
   
  )
}

export default Admin 