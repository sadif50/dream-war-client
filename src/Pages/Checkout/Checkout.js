import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { FaClock, FaStar, FaUserAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { name, course_logo, details, duration, price, ratings, totalEnlors, overview } = course;
    return (
        <div className='container my-5'>
            <Card className='border-0 '>
                <Card.Header className='primary-bg d-flex justify-content-between'>
                    <strong>Course Checkout</strong>
                </Card.Header>
                <Card.Body className='secondary-bg'>
                    <div className='secondary-bg p-3'>
                        <Row>
                            <Col lg='8'>
                                <Card.Title className='fs-1'>{name}</Card.Title>
                                <div>
                                    <p className='mb-2'>
                                        <small className='d-flex'>
                                            <span className='d-flex align-items-center me-3'><FaClock />&nbsp;{duration}</span>
                                            <span className='d-flex align-items-center me-3'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />&nbsp;{ratings}</span>
                                            <span className='d-flex align-items-center me-3'><FaUserAlt />&nbsp;{totalEnlors}</span>
                                        </small>
                                    </p>
                                    <p>
                                        <strong>Price: <span className='fs-3'>${price}</span></strong>
                                    </p>
                                    <h4>Intro</h4>
                                    <p>
                                        {details}
                                    </p>
                                </div>
                                <div>
                                    <h4>Course Overview</h4>
                                    <ul>
                                        {
                                            overview.map((item, i) => <li key={i+1}>{item}</li>)
                                        }
                                    </ul>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <Image src={course_logo} className='img-fluid bg-white'></Image>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;