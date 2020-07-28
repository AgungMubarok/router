import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, Button} from 'react-bootstrap';

import "./blogCard.css"

const BlogCard = () => {
    return (
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
                    <Button href="#" variant="danger">Read More</Button>
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
                    <Button href="#" variant="danger">Read More</Button>
                </Card>
                </Col>
            </Row>
            
        </Container>
    </div>
    )
}

export default BlogCard