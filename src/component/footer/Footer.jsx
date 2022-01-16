import React, { Component } from "react";
import {FaInstagram , FaTwitter} from "react-icons/fa";

const SocialShare = [
    {Social: <img src="/assets/images/logo/opensea.png"/> , link: 'https://opensea.io/nftoyer'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/nftoyer'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/nftoyer/'},
]

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Faça parte do Metaverso</span>
                                        <h2>Venha ser <br /> um NFToyer!</h2>
                                        <a className="rn-button-style--2" target="_blank" rel="noopener noreferrer" href='https://opensea.io/nftoyer'>
                                            <span>Ver coleção</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>NFToyer</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/">Home</a></li>
                                                    <li><a href="#galeria">Galeria</a></li>
                                                    <li><a href="#contato">Contato</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Diga olá</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:contato@nftoyer.com.br">contato@nftoyer.com.br</a></li>
                                                    <li><a href="mailto:vagas@nftoyer.com.br">vagas@nftoyer.com.br</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>© 2021 NFToyer. Todos direitos reservados.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;