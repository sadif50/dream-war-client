import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className="container">
            <div className='row'>
                <div className="col-lg-3">

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