import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftNav from '../../Shared/LeftNav/LeftNav';

const Courses = () => {
    // get loaded data
    const courses = useLoaderData();
    
    return (
        <div className="container my-5">
            <div className='row'>
                <div className="col-lg-3">
                    <LeftNav courses={courses}></LeftNav>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {
                            courses.map(course => <Course key={course._id} course={course}></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;