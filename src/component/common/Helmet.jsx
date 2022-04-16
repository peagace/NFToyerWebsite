import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{this.props.pageTitle} | Figuras Colecionáveis Autenticadas em NFT</title>
                    <link rel="canonical" href="https://nftoyer.com/"/>                    
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
