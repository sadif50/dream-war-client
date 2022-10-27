import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    // load functions using context
    const { logIn, providerLogin } = useContext(AuthContext);

    // Success and error message
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    // Log in provider
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    // get redirect path
    const from = location.state?.from?.pathname || '/courses';

    // This function is for login with email and password
    const handleLogIn = (e) => {
        e.preventDefault();

        // Initialize Message
        setErr('');
        setSuccess('');

        const form = e.target;

        // Get form data
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                setSuccess('Log In Successfull.');
                navigate(from, {replace: true});
            })
            .catch(err => {
                setErr(err.message)
            })
    }

    // Google Log in system
    const googleLogIn = () => {
        // Initialize Message
        setErr('');
        setSuccess('');

        providerLogin(googleProvider)
        .then(res => {
            setSuccess('Log In Successfull with Google.');
            navigate(from, {replace: true});
        })
        .catch(err=> setErr(err.message));
    }

    // Github Log in system
    const githubLogIn = () => {
        // Initialize Message
        setErr('');
        setSuccess('');

        providerLogin(gitHubProvider)
        .then(res => {
            setSuccess('Log In Successfull with Github.');
            navigate(from, {replace: true});
        })
        .catch(err=> setErr(err.message));
    }
    return (
        <div className='login_container secondary-bg'>
            <h2 className='text-center'>PLEASE LOG IN</h2>
            <Form className='mt-4' onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger fw-bold'>
                    {err}
                </p>
                {success && <p className='text-success fw-bold'>
                    {success}
                </p>}
                <Button className='route_item m-0 secondary-bg me-2' type="submit">
                    LOG IN
                </Button>
            </Form>
            <div className='mt-3'>
                <span className='d-block mb-2 fw-bold text-warning'>Or,</span>
                <Button className='route_item m-0 secondary-bg me-2' onClick={googleLogIn}>
                    <FaGoogle></FaGoogle> Log In Google
                </Button>
                <Button className='route_item m-0 secondary-bg' onClick={githubLogIn}>
                    <FaGithub></FaGithub> Log In GitHub
                </Button>
            </div>
            <h5 className='mt-3'>New to here? Please <Link to='/register'>Register</Link></h5>
        </div>
    );
};

export default Login;