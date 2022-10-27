import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import teaching from '../../../assets/home/teaching.jpg';
import student from '../../../assets/home/student.jpg';
import slide1 from '../../../assets/home/learn.jpg';
import slide2 from '../../../assets/home/learn2.jpg';
import slide3 from '../../../assets/home/learn3.jpg';
import partner1 from '../../../assets/home/partner/1.png';
import partner2 from '../../../assets/home/partner/2.png';
import partner3 from '../../../assets/home/partner/3.png';
import partner4 from '../../../assets/home/partner/4.png';
import './Home.css';

const Home = () => {
    return (
        <Container className='my-5'>
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to DreamWar</h3>
                        <p>DreamWar is a no 1 platform for learning programming language.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We Care About Learners</h3>
                        <p>We find out learners leackings and help them to solve.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We Have The Best Instructor</h3>
                        <p>
                            We hire the best instructor for courses. We hire them with world class quality.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className='py-5 mb-5'>
                <Col lg={6}>
                    <div className='d-flex flex-column justify-content-center align-items-start h-100'>
                        <h3 className='mb-3'>Join the battle of your dreams</h3>
                        <p>Instructors from around the world teach millions of students on DreamWar. We provide the tools and skills to teach what you love.</p>
                        <Link to='/courses' className='route_item ms-0 my-4 d-inline-block'>Find your dream course</Link>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="student-img">
                        <Image src={student} className='w-100'></Image>
                    </div>
                </Col>
            </Row>
            <div className='pb-5'>
                <h3 className='mb-3 text-center'>Our trasted partners</h3>
                <div className='partner_img'>
                    <img src={partner1} alt="" />
                    <img src={partner2} alt="" />
                    <img src={partner3} alt="" />
                    <img src={partner4} alt="" />
                </div>
            </div>
            <Row>
                <Col lg={6}>
                    <div className="teaching-img">
                        <Image src={teaching} className='w-100'></Image>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='d-flex flex-column justify-content-center align-items-start h-100'>
                        <h3 className='mb-3'>Become an instructor</h3>
                        <p>Instructors from around the world teach millions of students on DreamWar. We provide the tools and skills to teach what you love.</p>
                        <Link className='route_item ms-0 mt-4 d-inline-block'>Start teaching today</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;