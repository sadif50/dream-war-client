import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = ({courses}) => {
    return (
        <div>
            <h4 className='side_nav_header'>
               Our Best Courses
            </h4>
            <div>
            {
                courses.map(course => <li className='left_nav_course' key={course._id}>
                    <Link to={`/courses/${course._id}`}>{course.name}</Link>
                </li>)
            }
            </div>
        </div>
    );
};

export default LeftNav;