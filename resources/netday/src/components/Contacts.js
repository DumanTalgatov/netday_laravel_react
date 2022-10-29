import React from 'react';

import line from "../assets/images/hr-line.png";
import '../App.css';
import './Contacts.css';


class Contacts extends React.Component {
    render() {
        return (
            <div id="contacts">
                <div>
                    <div
                        className="title">CONTACTS
                    </div>
                    <div className="flex-center">
                        <img src={line} alt="hr-line" className="underline"/>
                    </div>
                </div>
                <div className={'main-container'}>
                    <div className={'inside-container content-end'}>
                        <div className={'center-div'}>
                            <div className={'in-text'}>Ready to answer all your questions:</div>
                            <div className={'flex-start-div'}>
                                <div className={'flex-mb-4'}>
                                    <img src="images/icon-message.png" alt='icon-message' className={'icon'}/>
                                    netday@sdu.edu.kz
                                </div>
                                <div className={'flex-mb-4'}>
                                    <img src="images/icon-telega.png" alt='icon-message' className={'icon'}/>
                                    @sdunetday
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'inside-container content-start'}>
                        <iframe
                            width={300} height={300}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11632.333264440063!2d76.6690542!3d43.2077418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b7d14aec270c056!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQodGD0LvQtdC50LzQsNC9INCU0LXQvNC40YDQtdC70Y8!5e0!3m2!1sru!2skz!4v1665748884123!5m2!1sru!2skz"></iframe>
                    </div>
                </div>
                <div className={'end-word'}>2022 NETWORKING DAY</div>
            </div>
        )
    }
}

export default Contacts;