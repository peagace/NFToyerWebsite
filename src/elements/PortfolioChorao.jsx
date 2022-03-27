import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import PortfolioHeader from "./common/PortfolioHeader";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import HeaderThree from "../component/header/HeaderThree";

const ChoraoSkatistaList = [
    {
        image: '1',
        category: 'Figura colecionável',
        title: '#01 Chorão Skatista - Gold',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: '2',
        category: 'Figura colecionável',
        title: '#01 Chorão Skatista - Silver',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: '3',
        category: 'Figura colecionável',
        title: '#01 Chorão Skatista - Carbon',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: '4',
        category: 'Acessório',
        title: '#01 Chorão Skatista - Accessory',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: '5',
        category: 'Desenho técnico',
        title: '#01 Chorão Skatista - Blueprint',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: '6',
        category: 'Conceito',
        title: '#01 Chorão Skatista - Concept',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    ,
    {
        image: '7',
        category: 'Item misterioso',
        title: '#01 Chorão Skatista - Mystery Box',
        linkCompra: 'https://opensea.io/nftoyer'
    }
];

// const ChoraoGrafiteiroList = [
//     {
//         image: '1',
//         category: 'Figura colecionável',
//         title: '#02 Chorão Grafiteiro - Gold',
//         linkCompra: 'https://opensea.io/nftoyer'
//     },
//     {
//         image: '2',
//         category: 'Figura colecionável',
//         title: '#02 Chorão Grafiteiro - Silver',
//         linkCompra: 'https://opensea.io/nftoyer'
//     },
//     {
//         image: '3',
//         category: 'Figura colecionável',
//         title: '#02 Chorão Skatista - Carbon',
//         linkCompra: 'https://opensea.io/nftoyer'
//     },
//     {
//         image: '4',
//         category: 'Acessório',
//         title: '#012 Chorão Skatista - Accessory',
//         linkCompra: 'https://opensea.io/nftoyer'
//     },
//     {
//         image: '5',
//         category: 'Desenho técnico',
//         title: '#01 Chorão Skatista - Blueprint',
//         linkCompra: 'https://opensea.io/nftoyer'
//     },
//     {
//         image: '6',
//         category: 'Conceito',
//         title: '#01 Chorão Skatista - Concept',
//         linkCompra: 'https://opensea.io/nftoyer'
//     },
//     ,
//     {
//         image: '7',
//         category: 'Item misterioso',
//         title: '#01 Chorão Skatista - Mystery Box',
//         linkCompra: 'https://opensea.io/nftoyer'
//     }
// ]

class PortfolioChorao extends Component {
    render() {
        return (
            <React.Fragment>

                <PageHelmet pageTitle='NTFTOYER | Chorão Charlie Brown Jr.' />


                {/* Start Breadcrump Area */}
                <PortfolioHeader title={'Chorão - Charlie Brown Jr.'} />
                {/* End Breadcrump Area */}
                <div className="active-dark">
                    <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

                    {/*#01 Chorão Skatista*/}
                    <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
                        <div className="container plr--10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-left service-style--3 mb--30">
                                            <h2 className="title"><spam style={{ color: '#6C1FE5' }}>#01</spam> Chorão Skatista</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--5">
                                    {ChoraoSkatistaList.map((value, i) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={i}>
                                            <div className="portfolio-style--3">
                                                <div className="thumbnail">
                                                    <a href={value.linkCompra}>
                                                        <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.image}.jpg`} alt="#01 Chorão Skatista" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <p className="portfoliotype">{value.category}</p>
                                                    <h4 className="title"><a href={value.linkCompra}>{value.title}</a></h4>
                                                    <div className="portfolio-btn">
                                                        <a className="rn-btn text-white" target="_blank" rel="noopener noreferrer" href={value.linkCompra}>Comprar</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*#01 Chorão Skatista*/}

                    {/*#02 Chorão Grafiteiro*/}
                    {/* <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
                        <div className="container plr--10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-left service-style--3 mb--30">
                                            <h2 className="title"><spam style={{ color: '#6C1FE5' }}>#02</spam> Chorão Grafiteiro</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row row--5">
                                    {ChoraoGrafiteiroList.map((value, i) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={i}>
                                            <div className="portfolio-style--3">
                                                <div className="thumbnail">
                                                    <a href={value.linkCompra}>
                                                        <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.image}.jpg`} alt="#01 Chorão Skatista" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <p className="portfoliotype">{value.category}</p>
                                                    <h4 className="title"><a href={value.linkCompra}>{value.title}</a></h4>
                                                    <div className="portfolio-btn">
                                                        <a className="rn-btn text-white" target="_blank" rel="noopener noreferrer" href={value.linkCompra}>Comprar</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*#02 Chorão Grafiteiro*/}


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