import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Carousel from 'react-bootstrap/Carousel';



function Cards() {

    const cards=[{bg:"https://img.freepik.com/free-vector/grunge-watercolor-background-using-pastel-colours_1048-6530.jpg?size=626&ext=jpg", top:'Score Big Savings With',heading:'STARBUCKS125',para:" Get your exclusive delivery discount code - STARBUCKS125- for a FLAT ₹125 on Swiggy & Zomato. ",flat:'flat',rupe:'125.00',btn:'Know More'},
    {bg:"https://img.freepik.com/free-vector/grunge-watercolor-background-using-pastel-colours_1048-6530.jpg?size=626&ext=jpg",top:'Sip The Festive Vibes With',heading:'Roasted Nut',para:"  Let the festivities begin with our Espresso fusion: milk, cashew nut sauce, pistachio &amp; a dash of Diwali magic.   ",flat:'Starting From',rupe:'400.00',btn:'Order Now   '},
    {bg:"https://img.freepik.com/free-vector/grunge-watercolor-background-using-pastel-colours_1048-6530.jpg?size=626&ext=jpg",top:'Arriving With A Sizzle',heading:'Diwali Blend',para:" Crafted with passion, Diwali Blend offers a flavorful, festive experience inspired by the colors  & flavours of Diwali.   ",flat:'For',rupe:'1100.00',btn:'Order Now   '}
]
  return (
    <div>

        <Container >
        <div className='main-card'>
            <Row>
            <Col>
            <div className='carousal-main'>
            <Carousel >
            
            {
                cards.map((display)=>   
                        
      <Carousel.Item>
      
         
         <div className='carousel-captions '>
         <h6 class="pt-2">{display.top}</h6>
              <h4>{display.heading}</h4>
              <p>{display.para  }</p>
              <p>{display.flat} <br /> {display.rupe}</p>
         </div>
 
              <div class="d-flex justify-content-end pb-3 me-3">
              <Button>{display.btn}</Button>
              </div>
              
      </Carousel.Item>
    
            )
            
            }
          </Carousel>
          </div>
            </Col>
            </Row>
        </div>
        </Container>
    </div>
  )
}

export default Cards