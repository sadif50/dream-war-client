import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/brand/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar className='primary-bg' expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to='/' className='brand_logo'>
                        <Image src={logo}></Image>
                        <span>DreamWar</span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='route_item' to='/courses'>Courses</NavLink>
                        <NavLink className='route_item' to='/faq'>FAQ</NavLink>
                        <NavLink className='route_item' to='/blog'>Blog</NavLink>
                    </Nav>
                    <Nav>
                        <Link>
                            <Image className='profile_img' src='https://scontent.fdac68-1.fna.fbcdn.net/v/t39.30808-6/307468017_823273085361960_8465225884846835712_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Y668lLxok8VEpYcKc2SA-o2KLlR-K8v6jYouVH4ryw68bW8COBMvZ6bXjS9WccElwRasJluSPTDw7ZlPmrAH&_nc_ohc=ziACKDO8tQMAX8uzu2G&_nc_zt=23&_nc_ht=scontent.fdac68-1.fna&oh=00_AT-QL8ZkjDi0jhAxmnRgONZ0AHzD83oxvhlFsXW4yEWGhA&oe=635ECC74'></Image>
                            <NavLink className='route_item' to='/login'>LogIn</NavLink>
                            {user.displayName}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;