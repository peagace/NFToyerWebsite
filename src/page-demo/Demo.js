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
import ProgressOne from "./../blocks/progressbar/ProgressOne";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'SEJA BEM-VINDO AO METAVERSO!',
        description: '',
        buttonText: 'Ver Coleções',
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

            


            {/* Start Blog Area */}
            <div id="galeria" className="fix">
                <div className="rn-blog-area pt--120 bg_color--5 mb-dec--30" style={{marginBottom:'50px'}}>
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>Últimas coleções</h2>
                                    <p>Comerializamos nossos NFTOYERs pela plataforma OpenSea.</p>
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
                                            <a href={value.link}>
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href={value.link}>{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href={value.link} rel="noopener noreferrer">Ver coleção</a>
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

            <div id="NFT" className="service-area ptb--80  bg_image bg_color--1">
                <div className="container">
                    <ServiceTwo />
                </div>
            </div>


            {/* PARCEIROS E MARCAS*/}
            {/* <div id="parceiros" className="fix">
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
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* PARCEIROS E MARCAS*/}

            {/* ROADMAP */}
            <div id="roadmap" className="fix">
                <div className="rn-brand-area ptb--120 bg_color--5" >
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-12" >
                                <div className="section-title text-left service-style--3 mb--30" >
                                    <h2 className="title">Nosso Roadmap</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-lg-12" >
                                <div className="section-title text-left service-style--3 mb--30" >
                                    <ProgressOne ProgressStyle="progress-bar--1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ROADMAP */}

            {/* FAQ */}
            <div id="faq" className="fix">
                <div className="rn-brand-area ptb--120 bg_color--6" >
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-12" >
                                <div className="section-title text-center service-style--3 mb--30" >
                                    <h2 className="title">FAQ</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-lg-12" >
                                <div className="section-title text-left service-style--3 mb--30" >

                                    <h4 className="title">O que é blockchain?</h4>
                                    <p>Blockchain é uma espécie de livro-razão digital compartilhado e imutável que facilita o processo de registro de transações e o rastreamento de ativos em uma rede, o que reduz os riscos e custos para todos os usuários.</p>

                                    <h4 className="title">O que é MetaMask?</h4>
                                    <p>Metamask é uma carteira de criptoativos que precisa ser instalada como extensão em seu navegador para comprar seu NFTOYER Seu NFT será armazenado no endereço da sua carteira. Após a criação da sua Metamask, o Opensea solicitará sua autorização para acessá-la, então você estará pronto para negociar seus NFTs. <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>Saiba mais sobre Metamask</a> e como é fácil de usar!</p>

                                    <h4 className="title">O que é OpenSea?</h4>
                                    <p>Atualmente, Opensea é o site mais popular do mundo para compra, venda e negociação de criptoativos.</p>

                                    <h4 className="title">O que é mint?</h4>
                                    <p>Mint é o processo computacional de validação de informações para a criação de um token na blockchain.</p>

                                    <h4 className="title">Como posso saber mais sobre o projeto?</h4>
                                    <p>Fique atento em nossas redes sociais, estaremos publicando todas as novidades diariamente!<a href="https://discord.gg/QSZbAntmmM" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}> Participe também da nossa comunidade no Discord!</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ */}



            {/* Start Contact Page Area  */}
            <div id="contato" className="fix">
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactOne />
                </div>
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

        </div>
    )
}

export default PortfolioLanding;
