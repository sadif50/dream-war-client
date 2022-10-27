import React from 'react';
import { Image } from 'react-bootstrap';
import notFound from '../../assets/notfound/404.png';

const PageNotFound = () => {
    return (
        <div className='bg-white text-center py-5'>
            <Image src={notFound} className='w-75' alt='404 Not Found.'></Image>
        </div>
    );
};

export default PageNotFound;