import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import PortfolioHeader from "./common/PortfolioHeader";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import HeaderOut from "../component/header/HeaderOut";

const ChoraoSkatistaList = [
    {
        image: '1',
        category: '15 unidades',
        title: '#01 Chorão Skatista - Gold',
        linkCompra: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34374241464314140766115780539862918218658797662975086541843924760133632000015'
    },
    {
        image: '2',
        category: '500 unidades',
        title: '#01 Chorão Skatista - Silver',
        linkCompra: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34374241464314140766115780539862918218658797662975086541843924761233143628276'
    },
    {
        image: '3',
        category: '5.000 unidades',
        title: '#01 Chorão Skatista - Carbon',
        linkCompra: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34374241464314140766115780539862918218658797662975086541843924762332655260552'
    },
    {
        image: '4',
        category: '2.500 unidades',
        title: '#01 Chorão Skatista - Accessory A',
        linkCompra: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34374241464314140766115780539862918218658797662975086541843924763432166885828'
    },
    {
        image: '5',
        category: '2.500 unidades',
        title: '#01 Chorão Skatista - Accessory B',
        linkCompra: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34374241464314140766115780539862918218658797662975086541843924764531678513604'
    },
    {
        image: '6',
        category: '2.500 unidades',
        title: '#01 Chorão Skatista - Accessory C',
        linkCompra: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/34374241464314140766115780539862918218658797662975086541843924765631190141380'
    },
    {
        image: '7',
        category: '1 unidade',
        title: '#01 Chorão Skatista - Mystery Box',
        linkCompra: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/34374241464314140766115780539862918218658797662975086541843924760133632000001'
    },
    {
        image: '8',
        category: '1 unidade',
        title: '#01 Chorão Skatista - Blueprint',
        linkCompra: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/34374241464314140766115780539862918218658797662975086541843924761233143627777'
    },
    ,
    {
        image: '9',
        category: '1 unidade',
        title: '#01 Chorão Skatista - Concept',
        linkCompra: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/34374241464314140766115780539862918218658797662975086541843924762332655255553'
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



class PortfolioChorao extends Component {
    render() {
        return (
            <React.Fragment>      


                {/* Start Breadcrump Area */}
                <PortfolioHeader title={'Chorão - Charlie Brown Jr.'} />
                {/* End Breadcrump Area */}
                <div className="active-dark">
                    <HeaderOut homeLink="/" logo="symbol-dark" color="color-black" />

                    {/*#01 Chorão Skatista*/}
                    <div id="galeria" className="fix">
                    <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
                        <div className="container plr--10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                            <div className="section-title text-left service-style--3 mb--30">
                                                <h2 className="title"><spam style={{ color: '#6C1FE5' }}>#01</spam> Chorão Skatista</h2>                                            
                                                <h4 style={{textAlign:'left', fontWeight:'200'}}>Disponível em: <spam id="demo" style={{textAlign:'left', color:"white", fontWeight:'800'}}/></h4>
                                            </div>
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
                                                        <a className="rn-btn text-white" target="_blank" rel="noopener noreferrer" href={value.linkCompra}>Ver no OpenSea</a>
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