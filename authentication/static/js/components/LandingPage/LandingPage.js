import React, { Component } from 'react';
import Slider from "react-slick";

import { GetExpertAdviceItem, GetPaidOverThePhoneItem, DemocratizeKnowledgeItem, CreateOverThePhoneItem, SmartPhoneTechnicianItem } from "../CarouselItems";
import WhyBeaprose from '../WhyBeaprose/WhyBeaprose';
import GiveAdvice from '../GiveAdvice/GiveAdvice';
import HowItWorks from '../HowItWorks/HowItWorks';
import YouAnExpert from '../YouAnExpert/YouAnExpert';
import Footer from '../Footer/Footer';

import Axios from "axios";
import Cookies from "js-cookie";

Axios.defaults.headers = {
    "content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken")
}

export default class LandingPage extends Component {
    render() {
        const settings = {
            dots: true,
            infinit: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 10000
        }
        return (
            <div>
                <Slider {...settings}>
                    <GetExpertAdviceItem/>
                    <GetPaidOverThePhoneItem/>
                    <DemocratizeKnowledgeItem/>
                    <CreateOverThePhoneItem/>
                    <SmartPhoneTechnicianItem/>
                </Slider>
                <WhyBeaprose/>
                <GiveAdvice/>
                <HowItWorks/>
                <YouAnExpert/>
                <Footer/>
            </div>
        )
    }
}
