import React, { Component } from "react";
import {FaInstagram , FaTiktok , FaTwitter, FaDiscord } from "react-icons/fa";
import {SiTiktok } from "react-icons/si";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'

const SocialShare = [
    {Social: <img src="/assets/images/logo/opensea-white.svg"/> , link: 'https://opensea.io/nftoyer'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/nftoyer'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/nftoyer/'},
    {Social: <FaDiscord /> , link: 'https://discord.gg/QSZbAntmmM'},
    {Social: <SiTiktok /> , link: 'https://www.tiktok.com/@nftoyer'},
]
class HeaderThree extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
        
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        // const { logo, color='default-color' } = this.props;
        // let logoUrl;
        // if(logo === 'light'){
        //     logoUrl = <img src="/assets/images/logo/logo-light.png" alt="NFToyer" />;
        // }else if(logo === 'dark'){
        //     logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="NFToyer" />;
        // }else if(logo === 'symbol-dark'){
        //     logoUrl = <img src="/assets/images/logo/nftoyer-logo.svg" alt="NFToyer" />;
        // }else if(logo === 'symbol-light'){
        //     logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="NFToyer" />;
        // }else{
        //     logoUrl = <img src="/assets/images/logo/logo.png" alt="NFToyer" />;
        // }
        
        return(
            <header className={`header-area header-style-two header--fixed`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={this.props.homeLink}>
                                <img src="/assets/images/logo/nftoyer-logo.svg" alt="NFToyer" />
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','sobre','galeria','NFT','roadmap','faq','contato']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#galeria">Coleções</a></li>
                                <li><a href="#NFT">NFT</a></li>                                
                                <li><a href="#roadmap">Roadmap</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#contato">Contato</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderThree;