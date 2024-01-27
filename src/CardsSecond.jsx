import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel';
function CardsSecond() {

    const cards=[{bg:"https://img.freepik.com/free-vector/grunge-watercolor-background-using-pastel-colours_1048-6530.jpg?size=626&ext=jpg", top:'Score Big Savings With',heading:'STARBUCKS125',para:" Get your exclusive delivery discount code - STARBUCKS125- for a FLAT ₹125 on Swiggy & Zomato. ",flat:'flat',rupe:'125.00',btn:'Know More'},
    {bg:"https://img.freepik.com/free-photo/abstract-background-illustration-watercolor-blue-green_53876-108704.jpg?w=740&t=st=1699332637~exp=1699333237~hmac=4e8839db95cedb04f9009915255cf683605c4b233ddb819efc05b601a3fb2a30",top:'Sip The Festive Vibes With',heading:'Roasted Nut',para:"  Let the festivities begin with our Espresso fusion: milk, cashew nut sauce, pistachio &amp; a dash of Diwali magic.   ",flat:'Starting From',rupe:'400.00',btn:'Order Now   '},
    {bg:"https://img.freepik.com/free-vector/modern-colorful-watercolor-background_1055-7132.jpg?w=740&t=st=1699332978~exp=1699333578~hmac=a46ed36f085d7f50db66c16f5ceb48d22d4e55542159c5a97d665dde6de253aa",top:'Arriving With A Sizzle',heading:'Diwali Blend',para:" Crafted with passion, Diwali Blend offers a flavorful, festive experience inspired by the colors  & flavours of Diwali.   ",flat:'For',rupe:'1100.00',btn:'Order Now   '}
]

  return (
    <div class='pt-5'>
         <Container >
        <div className='main-card'>
            <Row>
            <Col>
            < Carousel >
            
            {
                cards.map((display)=>   
                        
      <Carousel.Item >
       
        <div className='carousal-main' style={{}}>
          <Container style={{position:'relative'}} >
         
              <img class="image-back" src={display.bg} alt=""  />
             <div className='carousal-position mt-4' style={{marginLeft:'10%'}}>
             <h6 class="pt-2">{display.top}</h6>
              <h4>{display.heading}</h4>
              <p>{display.para  }</p>
              <p>{display.flat} <br /><span style={{fontWeight:'bold'}}>₹{display.rupe}</span> </p>
              <div class="d-flex justify-content-end me-3 btn3">
              <Button variant='success' className='btn3 pe-5 ps-5 '>{display.btn}</Button></div>
             </div>
              </Container>
        </div>
      </Carousel.Item>
            )
            }
               </Carousel>
            </Col>
            </Row>
        </div>
        </Container>

    </div>
  )
}

export default CardsSecond