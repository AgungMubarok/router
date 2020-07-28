import React from 'react';
import ReactPlayer from 'react-player'
import { Button, Form, FormControl} from 'react-bootstrap';

import classes from './videoBacground.css';
const BackgroundVideo = () => {
    return (
        <div className="Container" >
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
                    playing="true" loop="true" muted="true" width="100%" height="100%"
                />
            </div>
            <div className="Content">
                <div className="SubContent" >
                    <h3><b>Impact Byte Job <br/> Learn how to develope React projects</b></h3>
                    <Form inline>
                        <FormControl type="text" placeholder="Search job by keyword" className="mr-sm-2" />
                        <Button variant="danger" size="lg">
                        <svg width="32" height="32" viewBox="0 0 32 32">
                            <path fill="#231F1F" d="M24.762 21.83L32 29.19c-.774 1.19-1.504 1.93-2.77 2.81l-7.158-7.28c-2.322 1.87-5.257 2.987-8.45 2.987C6.1 27.707 0 21.504 0 13.853 0 6.203 6.1 0 13.623 0c7.524 0 13.624 6.202 13.624 13.853 0 2.97-.92 5.723-2.485 7.978zm-11.14 1.544c5.167 0 9.356-4.263 9.356-9.522 0-5.26-4.19-9.522-9.356-9.522-5.167 0-9.355 4.263-9.355 9.522 0 5.26 4.188 9.522 9.355 9.522z"></path>
                        </svg>
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo