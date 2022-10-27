import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import {FaDribbble, FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import './Footer.css';
import logo from '../../../assets/brand/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='primary-bg py-5'>
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <p className='fs-4'>
                            Important Links
                        </p>
                        <ul>
                            <li><Link className='primary-text'>About Us</Link></li>
                            <li><Link className='primary-text'>Contuct Us</Link></li>
                            <li><Link className='primary-text'>Support</Link></li>
                            <li><Link className='primary-text'>Terms and Conditions</Link></li>
                            <li><Link className='primary-text'>Privacy Policy</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6}>
                        <p className='fs-4'>
                            What's New
                        </p>
                        <ul>
                            <li><Link className='primary-text'>Offer Zone</Link></li>
                            <li><Link className='primary-text'>Instructors</Link></li>
                            <li><Link className='primary-text'>Courses</Link></li>
                            <li><Link className='primary-text'>Best Seller</Link></li>
                            <li><Link className='primary-text'>Top of the month</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex fs-3 mb-3'>
                            <Image style={{width: '40px'}} src={logo}></Image>
                            <span className='ms-1'>DreamWar</span>
                        </div>
                        <p className='text-justify'>
                        Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today.
                        </p>
                    </Col>
                </Row>
                <hr />
                <ul className='footer_icons'>
                    <li><FaFacebookF></FaFacebookF> </li>
                    <li><FaTwitter></FaTwitter></li>
                    <li><FaYoutube></FaYoutube></li>
                    <li><FaInstagram></FaInstagram></li>
                    <li><FaDribbble></FaDribbble></li>
                </ul>
                <p className='text-center mb-0'>
                    <small>&copy;2022 DreamWar All rights reserved.</small>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;