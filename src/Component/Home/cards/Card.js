import React from 'react'
import { Container, Media, MediaBody, Button} from 'react-bootstrap';

import "./Card.css"

const Prop = () => {
    return (
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
                    <Button href="#" size="lg" variant="danger">Read About our Culture</Button>
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
                    <Button href="#" size="lg" variant="danger">Read About our Culture</Button>
                    </Media.Body>
                    <img
                    width="30%"
                    className="mr-3"
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
                    <Button href="#" size="lg" variant="danger">Read About our Culture</Button>
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
                    <Button href="#" size="lg" variant="danger">Read About our Culture</Button>
                    </Media.Body>
                    <img
                    width="30%"
                    className="mr-3"
                    src="https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt="Generic placeholder"
                    />
                </Media>
            </ul>
        </Container>
    </div>
    )
}

export default Prop