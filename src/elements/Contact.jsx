import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiGlobe , FiMail , FiMapPin, FiChevronUp } from "react-icons/fi";
import ContactTwo from "../elements/contact/ContactTwo";
import ScrollToTop from 'react-scroll-up';
import { FaWhatsapp } from "react-icons/fa";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component{

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contato'/>

                <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Diga olá!</h2>
                                    <p>Utilize os campos abaixo para entrar em contato conosco! Responderemos o mais breve possível.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FaWhatsapp />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">WhatsApp</h4>
                                        <p><a href="tel:+057 254 365 456">+55 (11) 9 9697-8150</a></p>
                                        <p><a href="tel:+856 325 652 984">+55 (11) 9 8814-5079</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email</h4>
                                        <p><a href="mailto:contato@nftoyer.com.br">contato@nftoyer.com.br</a></p>
                                        <p><a href="mailto:vagas@nftoyer.com.br">vagas@nftoyer.com.br</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiGlobe />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Social Media</h4>
                                        <p>Instagram</p><p>TikTok</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                <Footer />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </React.Fragment>
        )
    }
}
export default Contact