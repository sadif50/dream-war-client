import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/brand/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Header = () => {
    // Get data using context
    const { user, logOut } = useContext(AuthContext);

    // Dark and Light Theme Condition
    const [theme, setTheme] = useState(true);
    
    return (
        <Navbar className='primary-bg' expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='brand_logo'>
                        <Image src={logo}></Image>
                        <span>DreamWar</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='route_item' to='/courses'>Courses</NavLink>
                        <NavLink className='route_item' to='/faq'>FAQ</NavLink>
                        <NavLink className='route_item' to='/blog'>Blog</NavLink>
                    </Nav>
                    <Nav>
                        <div className='mt-3 mt-lg-0 d-flex align-items-center'>
                            {
                                user?.uid ? <>  
                                        <Link>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                            >
                                                {({ ref, ...triggerHandler }) => (
                                                    <span
                                                        variant="light"
                                                        {...triggerHandler}
                                                        className="d-inline-flex align-items-center"
                                                    >
                                                        <Image ref={ref} className='profile_img' src={user?.photoURL}></Image>
                                                    </span>
                                                )}
                                            </OverlayTrigger>
                                        </Link>
                                        <Link className='route_item' onClick={logOut}>Log Out</Link>
                                    </>
                                    : <Link className='route_item' to='/login'>LogIn</Link>
                            }
                            <Link className={theme ? 'dark_btn' : 'light_btn'} onClick={() => setTheme(!theme)}>

                                {theme ? <FaMoon /> : <FaSun />}&nbsp;
                                {theme ? ' Dark Mode' : 'Light Mode'}

                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;