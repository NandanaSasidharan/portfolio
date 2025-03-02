import React from 'react'
import { Col, Row } from 'react-bootstrap';
function Me() {
  return (
    <div>
         <div style={{backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/021/054/604/non_2x/abstract-gradient-blur-shape-free-png.png")',backgroundRepeat:'no-repeat',backgroundPosition:'top right',backgroundSize:'contain'}} id='contact' className='container my-5 p-2'>
          <h1 className='my-2 px-4 text-center' style={{ fontFamily: 'Audiowide',fontSize:'60px'}} >Contact me</h1>
  <Row  style={{backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/021/054/503/original/abstract-gradient-blur-shape-free-png.png")',backgroundRepeat:'no-repeat',backgroundPosition:'left',backgroundSize:'contain'}}>
    <Col  xs={12} sm={12} md={4}>
    <img className='ast-sit img-fluid'  style={{width:'900px'}}  src='https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png'  alt="" />
    </Col>
    <Col xs={12} sm={12} md={8}>
    <div className='contact shadow p-3 rounded-9 w-75 mx-auto align-items-center justify-content-center'>
      <form >
        <h6 className='mt-3'>Full name*</h6>
        <input type="text" style={{backgroundColor:'#280B29'}} className='border-0 form-control rounded-9 '/>
        <h6 className='mt-3'>Email address*</h6>
        <input type="email" style={{backgroundColor:'#280B29'}} className='border-0 form-control rounded-9 '/>
        <h6 className='mt-3'>Message*</h6>
        <textarea style={{backgroundColor:'#280B29'}} className='border-0 form-control rounded-9 ' rows="4"></textarea>      
        </form>
        <div className='d-flex mt-3'>
          <img className='img-fluid' style={{width:'200px'}}  src="https://www.onlygfx.com/wp-content/uploads/2022/01/blue-neon-arrow-2.png" alt="" />
          <button style={{backgroundColor:'#D017B8',width:'100px',height:"50px"}} className='text-white d-block ms-auto btn rounded-9 shadow-0 mt-3'>Send</button>
        </div>
    </div>
    </Col>
  </Row>
    </div>
    </div>
  )
}

export default Me