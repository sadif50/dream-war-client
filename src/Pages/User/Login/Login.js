import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { logIn, providerLogin } = useContext(AuthContext);
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleLogIn = (e) => {
        e.preventDefault();
        setErr('');
        setSuccess('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        logIn(email, password)
            .then(() => {
                setSuccess('Log In Successfull.')
            })
            .catch(err => {
                setErr(err.message)
            })
    }

    const googleLogIn = () => {
        setErr('');
        setSuccess('');
        providerLogin(googleProvider)
        .then(res => {
            setSuccess('Log In Successfull with Google.')
        })
        .catch(err=> setErr(err.message));
    }
    const githubLogIn = () => {
        setErr('');
        setSuccess('');
        providerLogin(gitHubProvider)
        .then(res => {
            setSuccess('Log In Successfull with Github.')
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