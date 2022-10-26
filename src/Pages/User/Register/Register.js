import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login_container secondary-bg'>
            <h2 className='text-center'>REGISTRATION FORM</h2>
            <Form className='mt-4'>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='fullName' placeholder="Enter full name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button className='route_item m-0 secondary-bg' type="submit">
                    REGISTER
                </Button>
            </Form>
            <h5 className='mt-3'>Already Have An Account? Please <Link to='/login'>Login</Link></h5>
        </div>
    );
};

export default Register;