import React from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import 
{   Button,
    Form,
    FormControl,
    Container,
    Media,
    CardGroup,
    Card, Row, Col,
} from 'react-bootstrap';

import "./home.css"

const Home = () => {
    return (
    <>
        <div className="aldkjie" >
            <style type="text/css">
            {`
            .form-control {
            border-radius: 0px;
            height: 80px!important;
            width: 40%!important;
            }
            .SubContent .btn {
                height: 80px!important;
            }
            `}
            </style>
            <div className="player-wrapper">
                <ReactPlayer 
                    className='react-player'
                    url="//videos.ctfassets.net/i5wc420v2vd1/3ST3WLEGpWUu2Ymg8WoEMs/06ee7becf93cce3083b115d2feb63a8b/Netflix-MainHero-V2.mp4" 
                    playing="true" loop="true" muted="true" width="100%" height="50"
                />
            </div>
            <Container className="ndscnu">
                <div className="SubContent" >
                    <h3><b>Impact Byte Job Learn how to develope React projects</b></h3>
                    <Form inline>
                        <FormControl type="text" placeholder="Search job by keyword" className="mr-sm-2" />
                        <Link to="/ListJob"><Button variant="danger" size="lg">
                        <svg width="32" height="32" viewBox="0 0 32 32">
                            <path fill="#231F1F" d="M24.762 21.83L32 29.19c-.774 1.19-1.504 1.93-2.77 2.81l-7.158-7.28c-2.322 1.87-5.257 2.987-8.45 2.987C6.1 27.707 0 21.504 0 13.853 0 6.203 6.1 0 13.623 0c7.524 0 13.624 6.202 13.624 13.853 0 2.97-.92 5.723-2.485 7.978zm-11.14 1.544c5.167 0 9.356-4.263 9.356-9.522 0-5.26-4.19-9.522-9.356-9.522-5.167 0-9.355 4.263-9.355 9.522 0 5.26 4.188 9.522 9.355 9.522z"></path>
                        </svg>
                        </Button></Link>
                    </Form>
                </div>
            </Container>
        </div>
        <div className="mt-5 mb-5">
            <Container>
                <ul className="list-unstyled">
                    <Media as="li" className="mt-4 body-back">
                        <img
                        width="30%"
                        className="mr-3"
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt="Generic placeholder"
                        />
                        <Media.Body className="mt-4">
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Link to="/List-based media object">
                            <Button size="lg" variant="danger">Read About our Culture</Button>
                        </Link>
                        </Media.Body>
                    </Media>
                    
                    <Media as="li" className="mt-4 body-backw">
                        <Media.Body className="mt-2 body-backww">
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Link to="/List-based media object">
                        <Button size="lg" variant="danger">Read About our Culture</Button>
                        </Link>
                        </Media.Body>
                        <img
                        width="30%"
                        src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt="Generic placeholder"
                        />
                    </Media>

                    <Media as="li" className="mt-4 body-back">
                        <img
                        width="30%"
                        className="mr-3"
                        src="https://images.unsplash.com/photo-1483808161634-29aa1b0e585e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt="Generic placeholder"
                        />
                        <Media.Body className="mt-4">
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Link to="/List-based media object">
                        <Button size="lg" variant="danger">Read About our Culture</Button>
                        </Link>
                        </Media.Body>
                    </Media>

                    <Media as="li" className="mt-4 body-backw">
                        <Media.Body className="mt-2 body-backww">
                        <h5>List-based media object</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                        <Link to="/List-based media object">
                        <Button size="lg" variant="danger">Read About our Culture</Button>
                        </Link>
                        </Media.Body>
                        <img
                        width="30%"
                        src="https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt="Generic placeholder"
                        />
                    </Media>
                </ul>
            </Container>
        </div>
        <div>
            <h3 className="subbb"><b>Latest From Skilvul</b></h3>
            <Container className="mt-5 mb-5">
                <CardGroup>
                    <Card className="cqqq">
                    <ReactPlayer 
                    className='react-player'
                    url="https://www.youtube.com/watch?v=Iaelxnl6DoI&t=3s" 
                    width="100%"
                    />
                    </Card>
                    <Card className="cqqq">
                    <ReactPlayer 
                    className='react-player'
                    url="https://www.youtube.com/watch?v=hrd9TUI6sdE" 
                    width="100%" height="100%"
                    />
                    </Card>
                    <Card className="cqqq">
                    <ReactPlayer 
                    className='react-player'
                    url="https://www.youtube.com/watch?v=pM11d0J-5ss" 
                    width="100%" height="100%"
                    />
                    </Card>
                </CardGroup>
            </Container>
        </div>
        <div className="mt-5 mb-5">
            <style type="text/css">
                {`
                .btn-danger {
                border-radius: 0px;
                }
                `}
            </style>
            <Container>
                <Row>
                    <Col>
                    <Card className="hjj">
                        <Card.Title>TECH BLOG</Card.Title>
                        <h2>Machine Learning</h2>
                        <p><i>Aiko, James</i></p>
                        <Card.Text>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </Card.Text>
                        <Link to="/Machine Learning">
                        <Button variant="danger">Read More</Button>
                        </Link>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="hjj">
                        <Card.Title>COMPANY BLOG</Card.Title>
                        <h2>Ted Sarandos</h2>
                        <p><i>Charles, Mei</i></p>
                        <Card.Text>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </Card.Text>
                        <Link to="/Company Blog">
                        <Button variant="danger">Read More</Button>
                        </Link>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default Home;
