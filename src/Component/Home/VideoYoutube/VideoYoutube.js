import React from 'react';
import ReactPlayer from 'react-player'
import { CardGroup, Card, Container} from 'react-bootstrap';

import classes from './videoYoutube.css';
const VideoYoutube = () => {
    return (
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
    )
}

export default VideoYoutube