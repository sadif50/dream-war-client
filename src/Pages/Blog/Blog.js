import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center mb-5'>
                Some Questions & Answer
            </h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='primary-bg'>
                        <strong>01. What is cors?</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <strong>Answer: </strong> Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. The CORS workflow starts when a script loaded from one origin attempts to make a request to another origin (thus the name Cross-Origin Resource Sharing).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <strong>
                            02. Why are you using firebase? What other options do you have to implement authentication?
                        </strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <strong>Answer: </strong>Firebase is great for quick projects. It's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on my app instead of implementing custom authentication, web sockets or database connections. Besides, Firebase supports IOS, Android, Web, and Unity products, allowing me to track my users across a wide range of devices.
                        <br/>
                        <br/>
                        <strong>Other options for implementing authentication: </strong>
                        Auth0, MongoDB, Passport, Okta, Authress, STYTCH, Ory, Supabase, PingIdentity, Keycloak  are the alternatives  to Firebase Authentication.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <strong>
                            03. How does the private route work?
                        </strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <strong>Answer: </strong>The private route component is used to protect selected pages in a React app from unauthenticated users. <br/>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                        <br/>
                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <strong>04. What is node? How does node works?</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <strong>Answer: </strong> Node.js is an open source server environment. It is free. It runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). It uses JavaScript on the server and uses asynchronous programming. <br/>
                        Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
                        <br/>
                        <strong>Here is how Node.js works:</strong>
                        <ol>
                            <li>Sends the task to the computer's file system.</li>
                            <li>Ready to handle the next request.</li>
                            <li>When the file system has opened and read the file, the server returns the content to the client.</li>
                            <li>Eliminates the waiting, and simply continues with the next request.</li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;