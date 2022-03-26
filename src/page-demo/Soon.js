import React from 'react';
import Helmet from "../component/common/Helmet";
import { FaInstagram, FaFacebookF, FaTwitter, FaDiscord} from "react-icons/fa";
import {SiTiktok } from "react-icons/si";

const SocialShare = [
    {Social: <img src="/assets/images/logo/opensea-white.svg"/> , link: 'https://opensea.io/nftoyer'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/nftoyer'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/nftoyer/'},
    {Social: <FaDiscord /> , link: 'https://discord.gg/QSZbAntmmM'},
    {Social: <SiTiktok /> , link: 'https://www.tiktok.com/@nftoyer'},
]

const Soon = () => {
    return (
        <div className="active-dark" style={{ width: '100%', height:'100vh', background: "linear-gradient(142deg, rgba(47,18,0,1) 4%, rgba(20,11,0,1) 15%, rgba(1,2,2,1) 50%, rgba(24,12,36,1) 90%, rgba(54,0,111,1) 100%" }}>
            <Helmet pageTitle="NFToyer" />

            <div style={{display:'flex', flexDirection:"column", width:'75%', alignItems:'center', position:'fixed', left:'50%', top:'50%', transform:'translate(-50%, -50%)', zIndex:'3', height:'60%', justifyContent:"center"}}>
                <img src="/assets/images/logo/nftoyer-logo.svg" alt="NFToyer" />
                <h3 className="title" style={{textAlign:'center', marginTop:'20px'}}>Em breve, um novo conceito de NFTs.</h3>

                <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                    {SocialShare.map((val, i) => (
                        <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                    ))}
                </ul>
            </div>

            <img src="/assets/images/bg/breve.png" style={{height:'auto',width:'90%', maxWidth:'650px', zIndex:'0', display:'flex', position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)' }} alt="NFToyer"/>

        </div>
    )
}

export default Soon;


