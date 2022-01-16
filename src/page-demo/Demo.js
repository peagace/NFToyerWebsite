import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import ServiceTwo from "../elements/service/ServiceTwo";
import BlogContent from "../elements/blog/BlogContent";
import About from "../component/HomeLayout/homeOne/About";
import BrandTwo from "../elements/BrandTwo";
import ContactOne from "../elements/contact/ContactOne";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'SEJA BEM-VINDO AO METAVERSO!',
        description: '',
        buttonText: 'Ver Coleção',
        buttonLink: 'https://opensea.io/nftoyer'
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    const PostList = BlogContent.slice(0, 3);
    return (
        <div className="active-dark">
            <Helmet pageTitle="NFToyer" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Action Figures <br />em NFT para <br />
                                                <TextLoop>
                                                    <span> Colecionar.</span>
                                                    <span> Investir.</span>
                                                    <span> Compartilhar.</span>
                                                </TextLoop>{" "}
                                            </h1>

                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`} target="_blank" rel="noopener noreferrer">{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>

            {/* End Slider Area   */}
            <div id="sobre">
                <div className="about-area about-position-top pb--120 bg_color--1">
                    <About />
                </div>
            </div>

            <div id="NFT" className="service-area ptb--80  bg_image bg_image--3">
                <div className="container">
                    <ServiceTwo />
                </div>
            </div>


            {/* Start Blog Area */}
            <div id="galeria" className="fix">
                <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>Últimas coleções</h2>
                                    <p>Por meio da plataforma Opensea, compartilhamos nossos últimos lançamentos das personalidades brasileiras do mundo pop.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="https://opensea.io/nftoyer" target="_blank" rel="noopener noreferrer"><span className="text">Ver todas coleções</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value, i) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="https://opensea.io/nftoyer" target="_blank" rel="noopener noreferrer">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="https://opensea.io/nftoyer" target="_blank" rel="noopener noreferrer">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="https://opensea.io/nftoyer" target="_blank" rel="noopener noreferrer">Ver coleção</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start Brand Area */}
            <div id="parceiros" className="fix">
            <div className="rn-brand-area ptb--120 bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center service-style--3 mb--30">
                                <h2 className="title">Parceiros</h2>
                                <p>Empresas e artistas que já são NFToyers dentro do Metaverso.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt--40">
                            <BrandTwo/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* End Brand Area */}

            {/* Start Contact Page Area  */}
            <div id="contato" className="fix">
            <div className="rn-contact-page ptb--120 bg_color--1">
                <ContactOne />
            </div>
            </div>
            {/* End Contact Page Area  */}

            <Footer/>

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default PortfolioLanding;
