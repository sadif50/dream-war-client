import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateInfo} = useContext(AuthContext);
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        setErr('');
        setSuccess('');

        const form = e.target;
        const displayName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
        if(password.length < 6) {
            setErr('Password should be 6 charecter at least.');
            return;
        }
        createUser(email, password)
        .then(res=> {
            updateInfo(displayName, photoURL)
            .then(()=>{
                setSuccess('User Created Successfully.')
            })
            .catch(err=>setErr(err.message));
        })
        .catch(err => {
            setErr(err.message);
        })

    }
    return (
        <div className='login_container secondary-bg'>
            <h2 className='text-center'>REGISTRATION FORM</h2>
            <Form className='mt-4' onSubmit={handleRegister}>
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
                <p className='text-danger fw-bold'>
                    {err}
                </p>
                { success && <p className='text-success fw-bold'>
                    {success}
                </p>}
                <Button className='route_item m-0 secondary-bg' type="submit">
                    REGISTER
                </Button>
            </Form>
            <h5 className='mt-3'>Already Have An Account? Please <Link to='/login'>Login</Link></h5>
        </div>
    );
};

export default Register;