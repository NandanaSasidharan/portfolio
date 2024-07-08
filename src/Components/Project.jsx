import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../assets/img/color-sharp.png'
import Card from 'react-bootstrap/Card';
import book from '../assets/img/book.png'
import portfolio from '../assets/img/portfolio.png'
import travel from '../assets/img/travel.png'
import lumi from '../assets/img/lumi.png'
import fur from '../assets/img/fur.png'
import rest from '../assets/img/rest.png'
import resto from '../assets/img/resto.png'
import dr from '../assets/img/dr.png'
import bud from '../assets/img/bud.png'
import wet from '../assets/img/wet.png'
import ss from '../assets/img/ss.png'
import rep from '../assets/img/rep.png'
function Project() {
  return (
    <div >
         <div id='projects' className='container my-5 p-2' style={{backgroundPosition:'right',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/021/054/604/non_2x/abstract-gradient-blur-shape-free-png.png")',backgroundRepeat:'no-repeat',backgroundPosition:'top right',backgroundSize:'contain', width:'1000'}} >
    <h1 className='text-center'  >My Amazing<span style={{fontSize:'60px'}}> Works</span></h1>
   <Row  style={{backgroundRepeat:'no-repeat',backgroundPosition:'right',backgroundSize:'400px'}} className='p-3'>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://portfolionandana.netlify.app/">
      <Card.Img src={portfolio}/>
      </a>
        <Card.Body>
         <h6>PORTFOLIO</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://bkgallery.netlify.app/">
      <Card.Img src={book}  />
      </a>
        <Card.Body >
        <h6>BOOK GALLARY </h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://travelsitenandana.netlify.app/">
      <Card.Img src={travel} />
      </a>
        <Card.Body >
        <h6> TRAVEL BLOG</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://luminarsitenandana.netlify.app/">
      <Card.Img src={lumi}/>
      </a>
        <Card.Body >
        <h6>LUMINAR SITE</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://furnituresite.netlify.app/">
      <Card.Img src={fur} />
      </a>
        <Card.Body >
        <h6>FURNITURE SITE</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://foodsitenandana.netlify.app/">
      <Card.Img src={rest} />
      </a>
        <Card.Body>
        <h6>RESTAURANT SITE</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://weatherapp-nandana.netlify.app/">
      <Card.Img src={wet} />
      </a>
        <Card.Body>
        <h6>WEATHER APP</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://recipeproject-nandana.netlify.app/">
      <Card.Img src={rep} />
      </a>
        <Card.Body>
        <h6>RECIPE SITE</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://nandanasasidharan.github.io/Budjet-Calculator/">
      <Card.Img src={bud} />
      </a>
        <Card.Body>
        <h6>BUDGET CALCULATOR</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://doctorappointment-app-nandana.netlify.app/">
      <Card.Img src={dr} />
      </a>
        <Card.Body>
        <h6>DR APPOINMENT SITE</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://nandana-restaurant-listing-app.netlify.app/">
      <Card.Img src={resto} />
      </a>
        <Card.Body>
        <h6>FOOD SITE</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://projectfairnandana.netlify.app/">
      <Card.Img src={ss} />
      </a>
        <Card.Body>
        <h6>PROJECT FAIR</h6>
        </Card.Body>
      </Card>
    </Col>
    
   </Row>
   </div>
    </div>
  )
}

export default Project