import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    return (
        <Container className='my-5'>
            <h3 className='text-center mb-5'>
                Some Frequently Asked Questions
            </h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='primary-bg'>
                        <strong>
                            01. What do DreamWar courses include?
                        </strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    Each DreamWar course is created, owned and managed by the instructor(s). The foundation of each DreamWar course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <strong>
                            02. How do I take a DreamWar course?
                        </strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    DreamWar courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and mobile.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        03. What if I don’t like a course I purchased?
                    </Accordion.Header>
                    <Accordion.Body>
                    We want you to be satisfied, so all eligible courses purchased on DreamWar can be refunded within 30 days. If you are unhappy with a course, you can request a refund. 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Faq;