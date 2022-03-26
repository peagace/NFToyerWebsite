import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialShare = [
    { Social: <FaInstagram />, link: 'https://www.instagram.com/chorao/' },
]

class PortfolioHeader extends Component {
    render() {
        const { title, parent } = this.props;
        return (
            <React.Fragment>
                
                <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                <div className="active-dark" style={{backgroundColor:"transparent"}}>

                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', paddingTop: '10px' }}>
                                        <img src="/assets/images/team/parceiro-01.png" alt="Parceiros" />
                                        <h3 className="title">CHORÃO</h3>                                       
                                        <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                            {SocialShare.map((val, i) => (
                                                <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                            ))}
                                        </ul>
                                        
                                        <h5 style={{marginTop:'20px'}}>Sobre</h5>
                                        <p style={{ textAlign: 'justify', maxWidth:'430px', fontSize: '12px', lineHeight: '1.7', color:'white' }}>Alexandre Magno Abrão nasceu em São Paulo, no dia 9 de abril de 1970, mais conhecido como Chorão, foi um cantor, compositor, skatista, cineasta, roteirista e empresário brasileiro. fundou a banda Charlie Brown Jr. em 1992,  que Seguia a linha hardcore com influências do punk rock californiano, e mistura vários ritmos como o reggae, o hip-hop, criando um estilo próprio.</p>
                                        <div className="portfolio-button" style={{marginTop:'10px'}}>
                                            <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={'https://opensea.io/nftoyer'}>Ver no OpenSea</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              
            </React.Fragment>
        )
    }
}

export default PortfolioHeader;

