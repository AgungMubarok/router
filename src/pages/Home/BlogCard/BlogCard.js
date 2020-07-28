import React from 'react'
import { Container, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const BlogCard = ({cardBlog}) => {
    return (
    <Container className="mt-5 mb-5 d-flex justify-content-around">
        <style type="text/css">
            {`
            .btn-danger {
            border-radius: 0px;
            }
            .hjj {
                padding: 20px;
            }
            `}
        </style>
        {
            cardBlog.map((blogCardData) => (
                <div>
                    <Card className="hjj">
                        <Card.Title>{blogCardData.category}</Card.Title>
                        <h2>{blogCardData.title}</h2>
                        <p><i>{blogCardData.writer}</i></p>
                        <Card.Text>
                            {blogCardData.desc}
                        </Card.Text>
                        <Link to="/Machine Learning">
                        <Button variant="danger">Read More</Button>
                        </Link>
                    </Card>
                </div>
            ))
        }
        
    </Container>
    )
}

export default BlogCard