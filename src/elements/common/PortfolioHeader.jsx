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
                            <div className="col-lg-12" >
                                <div className="breadcrumb-inner pt--100" >
                                    <div className="active-dark" style={{ backgroundColor: "transparent" }}>

                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', paddingTop: '10px'}} id="sobre" className="fix">
                                            <img src="/assets/images/team/parceiro-01.png" alt="Chorão" />
                                            <h2 style={{ marginTop: '25px', textShadow: '1px 1px 3px black' }}>CHORÃO</h2>
                                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                                {SocialShare.map((val, i) => (
                                                    <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                                ))}
                                            </ul>

                                            <h4 style={{ marginTop: '20px', textShadow: '1px 1px 3px black' }}>Sobre</h4>
                                            <p style={{ textAlign: 'justify', maxWidth: '430px', fontSize: '14px', lineHeight: '1.7', color: 'white', textShadow: '1px 1px 3px black' }}>Alexandre Magno Abrão nasceu em São Paulo, no dia 9 de abril de 1970, mais conhecido como Chorão, foi um cantor, compositor, skatista, cineasta, roteirista e empresário brasileiro. Fundou a banda Charlie Brown Jr. em 1992, que seguia a linha hardcore com influências do punk rock californiano, e mistura vários ritmos como o reggae, o hip-hop, criando um estilo próprio.</p>
                                            <div className="portfolio-button" style={{ marginTop: '10px', boxShadow: '1px 1px 3px black' }}>
                                                <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={'https://opensea.io/collection/nftoyer'} style={{textShadow: '1px 1px 3px black' }}>Ver no OpenSea</a>
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

