import React from 'react';
import {Button, Container} from 'react-bootstrap';


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
                                <Button size="lg" variant="danger">Read About our Culture</Button>
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