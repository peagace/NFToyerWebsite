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
        buttonLink: 'https://opensea.io/collection/nftoyer'
    }
]

var countDownDate = new Date("May 5, 2022 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const PortfolioLanding = () => {
    let title = 'About Me',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    const PostList = BlogContent.slice(0, 3);
    return (
        <div className="active-dark">
            

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
                                            <h1 className="title">Figuras colecionáveis<br />em NFT para <br />
                                                <TextLoop>
                                                    <span> Manter.</span>
                                                    <span> Presentear.</span>
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
                <div style={{background: 'rgb(171,122,170)', background: 'radial-gradient(circle, rgba(171,122,170,1) 0%, rgba(108,31,229,1) 100%)', minHeight:'360px', position: 'relative'}}>
                    <div style={{ margin: '0',  position: 'absolute', top: '50%',  transform: 'translateY(-50%)', width:'100%'}}>
                        <h3 style={{textAlign:'center', fontWeight:'200'}}>LANÇAMENTO OFICIAL</h3>
                        <h2 style={{textAlign:'center'}}>#01 CHORÃO SKATISTA</h2>
                        <h3 id="demo" style={{textAlign:'center', color:"white"}}/>
                    </div>
                </div>
            </div>


            {/* Start Blog Area */}
            <div id="galeria" className="fix">
                <div className="rn-blog-area pt--120 bg_color--5 mb-dec--30" style={{marginBottom:'50px'}}>
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>Coleções</h2>
                                    <p>Comercializamos nossos NFTOYERs pela plataforma OpenSea.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="https://opensea.io/collection/nftoyer" target="_blank" rel="noopener noreferrer"><span className="text">Ver todas coleções</span></a>
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
            {/* <div id="roadmap" className="fix">
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
            </div> */}
            {/* ROADMAP */}

            {/* Start About Area  */}
            <div id="roadmap" className="fix">
            <div className="rn-about-area ptb--120 bg_color--5">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Roadmap</h2>
                                        <p className="description">Queremos criar o universo NFTOYER®, onde colecionar figuras digitais com a experiência de produtos físicos é só o começo.</p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">                                
                                                <ProgressOne/>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 mt_md--40 mt_sm--40">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* End About Area  */}

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

                                    <h4 className="title">• Como funciona o projeto?</h4>
                                    <p>Somos a primeira empresa brasileira, a produzir NFTs autenticados oficialmente, por estrelas da cultura pop nacional.</p>

                                    <h4 className="title">• Como funciona uma coleção?</h4>
                                    <p>Cada coleção trará uma estrela em sua versão NFTOYER®, contextualizada a um tema que representa sua personalidade e seu universo. As figuras são comercializadas dentro de suas próprias embalagens e traz consigo alguns itens que formam o conjunto daquela edição. <br/><br/>
                                    Nossa fabricação de brinquedos digitais opera de forma única. As coleções tem tiragens limitadas e não serão relançadas por nós novamente!</p>

                                    <h4 className="title">• Whitelist?!</h4>
                                    <p><spam style={{fontWeight:'800'}}>Não temos whitelist!</spam> Fique de olho em nossas redes sociais para saber dos próximos lançamentos.</p>

                                    <h4 className="title">• Onde posso comprar um NFTOYER®?</h4>
                                    <p>Nossos NFTs são comercializados em Ethereum e podem ser adquiridos na plataforma <a href="https://opensea.io/collection/nftoyer" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>OpenSea</a></p>

                                    <h4 className="title">• Como posso saber mais sobre o projeto?</h4>
                                    <p>Fique atento em nossas redes sociais! Todas as novidades serão publicadas diariamente!<a href="https://discord.gg/Z6mfaDzzub" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}> Participe também da nossa comunidade no Discord!</a></p>

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
