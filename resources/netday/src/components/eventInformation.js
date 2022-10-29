import React from 'react';
import line from "../assets/images/hr-line.png";

import './EventInformation.css';


class EventInformation extends React.Component {
    render() {
        return (
            <div id="info" className="bgimage m-top">
                <div>
                    <div className="title">EVENT INFORMATION</div>
                    <div className="center">
                        <img src={line} alt="hr-line" className="underline"/>
                    </div>
                    <div className="sub-title flex-center">NOVEMBER 2022</div>
                </div>
                <div className="main-div ">
                    <div className="flex-center">
                        <div className="text-color">
                            <div className="num-font-big">12</div>
                            <div className="num-font-mid">sat</div>
                        </div>
                        <div className="num-font-hug">FIRST TOUR</div>
                        <div className="num-font-hug">
                            <div>ONLINE</div>
                            <div>TEST</div>
                        </div>
                    </div>
                    <div className="flex-center mx-20px">
                        <div className="text-color">
                            <div className="num-font-big">26</div>
                            <div className="num-font-mid">sat</div>
                        </div>
                        <div className="num-font-hug">SECOND TOUR</div>
                        <div className="num-font-hug">
                            <div>OFFLINE</div>
                            <div>PACKET TRACER TASK</div>
                        </div>
                    </div>
                    <div className="flex-center">
                        <div className="text-color">
                            <div className="num-font-big">27</div>
                            <div className="num-font-mid">sun</div>
                        </div>
                        <div className="num-font-hug">THIRD TOUR</div>
                        <div className="num-font-hug">
                            <div>OFFLINE</div>
                            <div>QUEST</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventInformation;