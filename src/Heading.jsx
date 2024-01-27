import React from 'react'
import './Heading.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Heading() {
  return (
    <div>
        <Container fluid style={{paddingLeft:'0',paddingRight:'0'}}>
        <section >
        <Row>
          <Col>
        
                <div  className='main-head '>
                <div className='first-head'>
                    {/* <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" fluid/> */}

                    <Image height={"40px"} className='text-center' src="https://www.starbucks.in/assets/icon/logo.png" fluid />
                    </div>
                    <div className='first-head-a' >
                    <a style={{textDecoration:'underLine'}} href="">Home</a>
                    <a href="">Gift</a>
                    <a href="">Order</a>
                    <a href="">Pay</a>
                    <a href="">Store</a>
                    </div>
                <div className="second-head">
                    <div className='head-search'>
                   
                    <i class="fa-solid fa-magnifying-glass   mag-len"></i>
                      <input type="text" className="in-put" id="" placeholder='Looking For Something' />
                    
                    </div>
                    <i style={{paddingLeft:'50px'}} class="fa-regular fa-user user"></i>
                </div>

                </div>
               
        
      
        </Col>
        </Row>
        </section>
        </Container>
        <Container fluid class=" headers " style={{paddingLeft:'0',paddingRight:'0'}} >
          <Row>
            <Col>
            <div class='world ' >
             <div className='left-world'>
              <h5>Enter the world of Manish Malhotra + Starbucks</h5>
            </div>
            <div className='right-world'>
            <button className='btn2'>Know More</button>  

          </div>
          </div>
          </Col>
          </Row>
        </Container>

    </div>
  )
}

export default Heading