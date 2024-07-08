import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import './connect.css'

function Connect() {
   
  return (
    <div >
        <h1 className='text-center' style={{fontFamily:'Audiowide',fontSize:'60px'}}>About Me</h1>
        <div className='abt container p-4' id='about'>
          
      <Row className='w-100 pt-3'>
        <Col xs={1} sm={12} md={5} className='d-flex m-auto'>
          <img className='dev img-fluid' src='https://img.freepik.com/premium-photo/graphic-designer-female-caucasian-young-adult-working-computer-desk-indoor-generative-ai-aig22_31965-139630.jpg'  alt="" />
       
        </Col>
        <Col xs={12} sm={12} md={6}>
        <p className='text-end '><i style={{fontSize:'50px'}} class="fa-solid fa-arrow-right-long text-info"></i></p>
        <p className='mx-auto p-2 text-center text-md-start '>My journey in software development began with a fascination for problem-solving and innovation.I'm particularly enthusiastic about staying up-to-date with the latest technologies and trends in the industry. Whether it's exploring new programming languages like Rust or diving deep into machine learning algorithms, I'm always eager to expand my skill set and embrace new challenges.</p>
        <a style={{ width: '150px'}}
            
              href='https://www.linkedin.com/in/nandana-sasidharan-7b1a64288/'
            > <button className='vvd btn btn-primary rounded-6px' ><span>Let's Connect</span></button>
             
            </a>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default Connect