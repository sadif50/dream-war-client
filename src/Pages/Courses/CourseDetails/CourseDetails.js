import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Image, Row } from 'react-bootstrap';
import { FaClock, FaStar, FaUserAlt, FaArrowRight, FaDownload } from 'react-icons/fa';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
    unit: 'in',
    format: [8.27, 11.67]
};

const CourseDetails = () => {
    const course = useLoaderData();
    const { _id, name, course_logo, details, duration, price, ratings, totalEnlors, overview } = course;
    return (
        <div className='container my-5'>
            <Card className='border-0 '>
                <Card.Header className='primary-bg d-flex justify-content-between'>
                    <span>Course Details</span>
                    
                    <Pdf targetRef={ref} filename={`${name}.pdf`} options={options} x={.3} y={.5} scale={0.68}>
                        {({ toPdf }) => <a onClick={toPdf} className='course_btn'><FaDownload/></a>}
                    </Pdf>
                </Card.Header>
                <Card.Body className='secondary-bg'>
                    <div className='secondary-bg p-3' ref={ref}>
                        <Row>
                            <Col lg='2'>
                                <Image src={course_logo} className='img-fluid bg-white'></Image>
                            </Col>
                            <Col lg='10'>
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
                        </Row>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link className='course_btn text-success' to={`/checkout/${_id}`}><strong>Get premium access</strong> <FaArrowRight/></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;