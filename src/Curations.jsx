import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Curations() {
    const curation=[{name:'Bestseller',image:'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg'}
    ,{name:'Drinks',image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg",
},{name:'Food',image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg",
},{name:'Merchandise',image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg",
},{name:'Coffee At Home',image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg",
},{name:'Ready To Eat',image:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg",
}
]
  return (
    <div>
        
            <Container>
            <Row className=''>
              <Col>
            <h2 class=' pt-4' style={{marginBottom:'2rem',fontWeight:'500'}}>Handcrafted Curations</h2>
            <div class='d-flex justify-content-evenly Handcrafted flex-wrap'>
                {
                    curation.map((display)=>
                    <div>

                <img className='image-curation me-5' src={display.image} alt="" srcset="" />
                <h6 className='me-5' style={{textAlign:'center'}}>{display.name}</h6>
                    </div>
                    
             
                    )
                }
            </div>
            </Col>
            </Row>
            </Container>



    </div>
  )
}

export default Curations