import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import PortfolioHeader from "./common/PortfolioHeader";
import PortfolioListChorao from "./portfolio/PortfolioImagesChorao";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import HeaderThree from "../component/header/HeaderThree";

class PortfolioChorao extends Component {
    render() {
        return (
            <React.Fragment>

                <PageHelmet pageTitle='NTFTOYER: Chorão - Charlie Brown Jr.' />


                {/* Start Breadcrump Area */}
                <PortfolioHeader title={'Chorão - Charlie Brown Jr.'} />
                {/* End Breadcrump Area */}
                <div className="active-dark">
                    <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

                    {/* Start Portfolio Area */}
                    <div className="portfolio-area ptb--120 bg_color--1">
                        <div className="portfolio-sacousel-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-left service-style--3 mb--30">
                                            {/* <div style={{backgroundColor:'blue', display:'flex', justifyContent:'center', alignSelf:"center"}}>
                                                <h2 className="title">01</h2>
                                                <svg width="260" height="224.24038" viewBox="0 0 260 224.24038" >
                                                    <polygon class="cls-1" points="250.114 224.24 0 224.24 9.886 0 260 0 250.114 224.24" style={{fill:'#e0222c'}}/>
                                                </svg>
                                            </div> */}
                                            <h2 className="title">#01 Chorão Skatista</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <PortfolioListChorao styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}

                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
export default PortfolioChorao;