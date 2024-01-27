import React from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'
function Footer() {
  return (
    <div className='pt-5 mt-5' style={{
        backgroundColor: '#0e382c',
        color: '#bbb',
        lineHeight: 1.5}}> 
        <Container>
          <Row>
            {/* //col-md-2 mb-md-0 mb-4 */}
        <div className='footer-main   mt-5'>
          <Col md={2}>
            <div className='footer-logo'>
                <Image  src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
            </div>
            </Col>
            <Col md={2}>
            <div className='footer-about '>
                    <ul><h6>AboutUs</h6>
                        <a href=""><li>Cofeehouse</li></a>
                        <a href=""><li>Our Heritage</li></a>
                        <a href=""><li>Our Company</li></a>
                    </ul>
                 </div>
                 </Col>
                 <Col md={2}>
                 <div className='footer-response'>
                    <ul><h6>Responsibility</h6>
                       <a href="">  <li>Community</li></a>
                      <a href=""><li>Ethical Sourcing</li></a>
                        <a href=""><li>Environmental Stewardship</li></a>
                        <a href=""><li>Diversity</li></a>
                
                      
                    </ul>
                 </div>
                 </Col>
                 <Col md={2}>
                 <div className='footer-quick'>
                    <ul><h6>Quick Links</h6>
                    <a href=""><li>Privacy Policy</li></a>
                        <a href="">  <li>Starbucks Rewards Day Offer</li></a>
                      <a href=""> <li>Delivery</li></a>
                       <a href=""><li>Season's Gifting</li></a>
                        <a href="">   <li>Careers</li></a>
                     <a href=""><li>Customer Service</li></a>
                        <a href=""><li>FAQs</li></a>
                        <a href=""><li>Offer for Beverage Subscription at Starbucks.</li></a>
                        
                    </ul>
                 </div>
                 </Col>
                 <Col md={2}>
                  <div className='d-flex  footer-social '>
                 <div className=' '>
                    <h6 className='social'>SOCIAL MEDIA</h6>
                   <div className='d-flex'>
                        <img className='img-fluid' src="https://www.starbucks.in/assets/icon/instagram.svg" alt="" />
                        <img className='img-fluid' src="https://www.starbucks.in/assets/icon/facebook.svg" alt="" />
                        <img className='img-fluid' src="https://www.starbucks.in/assets/icon/twitter.svg" alt="" />
                   </div>
                 </div>
                 <div className='footer-app ps-5 '>
                 <Image  src='https://www.starbucks.in/assets/images/appstoreiOS.png' alt=""  height={'50px'}/>
                 <Image  src='https://www.starbucks.in/assets/images/appstoreAndroid.png' alt="" height={'50px'}/>
                 </div>
                 </div>
                 </Col>
        </div>
        </Row>
        </Container>  
      <Container>
      <div className='footer-bottom mt-5'>
      <hr style={{border: '1px solid white'}}/>
      <div className='footer-bottom-main'>
        <div className='footer-bottom-left'>
          <a href="">Web Accessiblity <span>|</span> 
          </a>
          <a href="">Privacy Statement  <span>|</span> </a>
          <a href="">Terms of Use  <span>|</span> </a>
            <a href="">Contact Us</a>
        </div>
        <div className='footer-bottom-right'>
          <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>

        </div>
      </div>
      </div>
      </Container>
      

    </div>
  )
}

export default Footer