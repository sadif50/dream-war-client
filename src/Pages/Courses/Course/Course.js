import React from 'react';
import { Image } from 'react-bootstrap';
import './Course.css';
import { FaClock, FaStar, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    // Distructure loaded data
    const {_id, name,course_logo, duration, price, ratings } = course;

    return (
        <div className='col-md-6'>
            <div className="course_box">
                <h5>{name}</h5>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='mb-0'>
                            <small className='d-flex'>
                                <span className='d-flex align-items-center me-3'><FaClock/>&nbsp;{duration}</span> <span className='d-flex align-items-center me-3'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>&nbsp;{ratings}</span>
                            </small>
                        </p>
                        <p className='mb-0'>Price: ${price}</p>
                    </div>
                    <div>
                        <Image src={course_logo}></Image>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-end'>
                    <Link className='course_btn' to={`/courses/${_id}`}>Show Details <FaArrowRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;