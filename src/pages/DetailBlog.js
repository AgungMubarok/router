import React from 'react'
import { Container,Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailBlog = () => {
    const blogCardData = [
        {
          category : "TECH BLOG",
          title : "Machine Learning",
          writer : 'Aiko, James',
          desc : ` Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.`
        },
        {
          category : "COMPANY BLOG",
          title : "Ted Sarandos",
          writer : 'Charles, Mei',
          desc : ` Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.`
        }
    ];

    let {id} = useParams();
    let dataDetail = blogCardData.filter(el => el.title === id);
    console.log(id);
    let useData = dataDetail[0]
    return (
        <div className="gerg mb-5">
        <style type="text/css">
            {`
            .gerg {
                padding-top: 90px;
            }
            `}
        </style>
        <Container>
            <Card className="hjj p-4">
                <Card.Title>
                    <h1>{id}</h1>
                </Card.Title>
                <Card.Text>
                    {useData.desc}                
                </Card.Text>
            </Card>
        </Container>
    </div>
    )
}

export default DetailBlog