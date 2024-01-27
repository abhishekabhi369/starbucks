
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import React, { useRef, useState } from 'react';
import Image from 'react-bootstrap/Image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Barista() {
    const array=[{pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112570.webp", green:"https://www.starbucks.in/assets/icon/veg.svg",title:"Strawberry Milkshake",qnty:" TALL(Tall Strawberry Milkshake) PER SERVE (354ml)  - 569 Kcal ",rupe:"367.50",btn:"Add Item"},
    {pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/112573.webp", green:"https://www.starbucks.in/assets/icon/veg.svg",title:"Vanilla Milkshake",qnty:" TALL(354ml)- 531 Kcal ",rupe:"367.50",btn:"Add Item"},]
  return (
    <div style={{backgroundColor:'#dee2e6',position:'relative'}}>
      <Container  >
        <Row>
          <Col><h3 className='pt-2 pb-4'>Barista Recommends</h3></Col>
        </Row>

        <Row>
        <Swiper
       slidesPerView={1.2}
       spaceBetween={-700}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper"
       breakpoints={{
        320: {
    
          spaceBetween: 50
        },
        // when window width is >= 480px
        480: {
          spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
         
          spaceBetween: -50
        },
        768: {
          spaceBetween: -100, // Adjust for medium-sized devices
        },
        1200: {
          spaceBetween: -600, // Adjust for larger devices
        },
      }}
     >
          {
            array.map((display)=>
            

        <SwiperSlide className='pb-5 ' style={{width:"500px"}}>
          <div className='barista-main-head pt-3 ms-3 pb-5'>
          <div className='barista-main '>
            <div className='barista-img'>
              <Image className='barista-imgs' src={display.pic} alt="" />
            </div>
            <div className='barista-para ps-3'>
              <img className='barista-green' src={display.green} alt="" />
              <h6 style={{fontSize: '14px',fontFamily:"SoDoSans_Semibold,Helvetica,sans-serif",fontWeight:'bold'}}>{display.title}</h6>
              <p style={{fontSize: '10px',fontFamily:"Pike_Regular,Helvetica,sans-serif",color:"#6c757d"}}>{display.qnty}</p>
            </div>
            </div>
            <div className='barista-bottom pt-3'>
              <div className='barista-bottom-left'>
                <h6>₹{display.rupe}</h6>
              </div>
              <div className='barista-bottom-right'>
              <Button variant='success' className='btn4 '>{display.btn}</Button> 
              </div>
            </div>
            </div>
        </SwiperSlide>
            )
          }
           </Swiper>

        </Row>


          <a className='view-link me-5 mt-4' href=""><h6 className='me-5'>View Menu</h6></a>

         <div className='text-center view-menu-button'>
          <Button variant='dark' className='btn4 ps-5 pe-5 '>View Menu</Button> 
    
          </div>
      </Container>


    </div>
  )
}

export default Barista