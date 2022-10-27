import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    // Load data using context
    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    // Loader play untill get current user data from firebase
    if (loader) {
        return <div className='text-center mt-5'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    // Check user for protected route
    if (user && user.uid) {
        return children;
    }

    // Navigate to log in page
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;