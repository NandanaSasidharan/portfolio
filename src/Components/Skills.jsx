import React from 'react'
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
//import Carousel from 'react-multi-carousel';
//import 'react-multi-carousel/lib/styles.css';

function Skills() {
  return (
    <div  style={{ display: 'flex', justifyContent: 'center',marginTop:'100px' }} >
        
        <section className="skill" id="skills" >
       <div> <h2 style={{textAlign:"center",fontFamily:'Audiowide',fontSize:'60px'}}>My Skills</h2>
                      </div>
        <div className="container ">
            <div className="row ">
                <div className="">
                    <div >
                        
                        <div className='text-center' style={{ display: 'flex', justifyContent: 'center' }}>
                            <div >
                                <img src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png'alt="Image" style={{width:"170px"}} />
                                <h5 className='text-center'>HTML</h5>
                            </div>
                            <div className="item">
                                <img src='https://cdn-icons-png.freepik.com/512/5968/5968242.png' alt="Image"  style={{width:"170px"}}  />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src='https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png' alt="Image"  style={{width:"170px"}} />
                                <h5>JS</h5>
                            </div>
                            <div className="item" style={{marginTop:'10px'}}>
                                <img src="https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="Image"  style={{width:"200px"}} />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item" style={{marginTop:'30px'}}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Image"  style={{width:"170px"}} />
                                <h5>REACT</h5>
                            </div>
                            <div className="item p-2" style={{marginTop:'10px'}}>
                                <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="Image"  style={{width:"160px"}} />
                                <h5>MONGODB</h5>
                            </div>
                            <div className="item p-2" >
                                <img src='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'alt="Image" style={{width:"155px"}} />
                                <h5 className='text-center'>NODEJS</h5>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Skills