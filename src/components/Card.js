import React from 'react';
import {Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const MediaCard = ({ listMedia }) => {
    return (

            <>
                {
                    listMedia.map((mediaObject) => (
                        <Container>
                        <div className={mediaObject.bcr}>
                            <img
                            width="50%"
                            className={mediaObject.jarak}
                            src={mediaObject.image}
                            alt="Generic placeholder"
                            />
                            <div className="m-5">
                            <h5>{mediaObject.titleOb}</h5>
                            <p>{mediaObject.descrr}</p>
                            <Link to="/List-based media object 1">
                                <Button size="lg" variant="danger">Read About our Culture</Button>
                            </Link>
                            </div>
                        </div>
                        </Container>
                        )
                    )
                }
            </>
        )
};

export default MediaCard;