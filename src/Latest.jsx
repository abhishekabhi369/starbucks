import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import Image from 'react-bootstrap/Image';

import 'swiper/css/pagination';
import 'swiper/css';



// Import Swiper styles
import 'swiper/css';

function Latest() {
    const offers=[{pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102253.webp",
    green:"https://www.starbucks.in/assets/icon/veg.svg",title:'Pumpkin spice latte ',subTitle:"SHORT(237 ML)",
    para:"Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg an.. ",
    rupe:"414.75",btn:'Add Item'
},{pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102257.webp",
green:"https://www.starbucks.in/assets/icon/veg.svg",title:'Iced Pumpkin spice latte ',subTitle:"SHORT(237 ML)",
para:"Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg an.. ",
rupe:"414.75",btn:'Add Item'
},{pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102253.webp",
green:"https://www.starbucks.in/assets/icon/veg.svg",title:'Pumpkin spice latte ',subTitle:"SHORT(237 ML)",
para:"Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg an.. ",
rupe:"414.75",btn:'Add Item'
},{pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102253.webp",
green:"https://www.starbucks.in/assets/icon/veg.svg",title:'Pumpkin spice latte ',subTitle:"SHORT(237 ML)",
para:"Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg an.. ",
rupe:"414.75",btn:'Add Item'
},{pic:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/102253.webp",
green:"https://www.starbucks.in/assets/icon/veg.svg",title:'Pumpkin spice latte ',subTitle:"SHORT(237 ML)",
para:"Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg an.. ",
rupe:"414.75",btn:'Add Item'
}]
  return (
    <div >
    <Container>
        <Row>
            <Col><h3 className='latest-head pt-5 pb-4' style={{color:"black"}}>Latest Offering</h3></Col>
        </Row>
        <Row>
            <Col>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
      
            slidesPerView:1.3
          },
          // when window width is >= 480px
          480: {
            slidesPerView:1.3
          },
          // when window width is >= 640px
          640: {
           
            slidesPerView:2.5
          },
          768: {
            slidesPerView:2.5 // Adjust for medium-sized devices
          },
          1024: {
            slidesPerView:2.5 // Adjust for larger devices
          },
        }}
     >
        {
            offers.map((display,index)=>
           
            <SwiperSlide>
   <Card className='cardss'>
  {/* <Card.Img className='card-image' src={display.pic} /> */}
  <div className='card-image'>
  <Image  src={display.pic} alt=""  />
  </div>
    <div style={{position:'relative'}}>
    <Image className='ms-3 mt-1' style={{    width: '16px',
    height:'16px'}} src={display.green} alt="" fluid />
    
    <h6 className='display-title ms-3 mt-1'>{display.title}</h6>
    <h6 className='display-subTitle ms-3 mt-4'> {display.subTitle}</h6>
    
    </div>
    <div><p className='para mt-5 ms-3'>{display.para}</p></div>
    <div className='last-card'>
          <div className='rupe-card ms-3'><h6>₹{display.rupe}</h6></div>
          <div className='btn-card me-3'>   <Button variant='success' className='btn4 '>{display.btn}</Button> </div>
       </div>
</Card>

</SwiperSlide>
            )
        }
         </Swiper>
         </Col>
        </Row>
    </Container>
</div>
  )
}

export default Latest