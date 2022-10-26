import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login_container secondary-bg'>
            <h2 className='text-center'>PLEASE LOG IN</h2>
            <Form className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button className='route_item m-0 secondary-bg' type="submit">
                    LOG IN
                </Button>
            </Form>
            <h5 className='mt-3'>New to here? Please <Link to='/register'>Register</Link></h5>
        </div>
    );
};

export default Login;