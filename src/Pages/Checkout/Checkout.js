import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            Checkout
        </div>
    );
};

export default Checkout;