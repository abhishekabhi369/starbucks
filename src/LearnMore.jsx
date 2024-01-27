import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';



// Import Swiper styles
import 'swiper/css';
import { Image } from 'react-bootstrap';


function LearnMore() {
  return (
    <div className='pt-5 '>
        <div className='More-main pb-5' style={{backgroundColor:'#dee2e6'}}>
        <Container>
        <Row>
        <Col>
            <h3 className='pt-4 learn-head pb-4'>Learn More AboutThe World of coffee!</h3>
        </Col>
        </Row>
        <Row>
            <Col>
               
                <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"

     >
        <SwiperSlide>

        <div id='main-' className='img-main'>
                <Image className='learn-img' src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/coffee_culture_blog_web1_c6e691b286.jpg" alt=""  />
               
                <div className='img-content pb-5 ps-5'>
                    <div className='img-heading text-white '><h3>How Coffee Stirred Revels & Rebels </h3></div>
                    <div className='img-para text-white mb-3'><p className='img-paras '> Delighted by the jovial character of coffee, everyone was inspired to bring it h ... </p></div>
                    <div ><button className='img-btn'>Learn More</button></div>
                </div>

                </div>
        </SwiperSlide>
        </Swiper>
            </Col>
        </Row>

        </Container>

        </div>
    </div>
  )
}

export default LearnMore