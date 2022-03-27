import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{this.props.pageTitle} | Figuras Colecionáveis Autenticadas em NFT</title>
                    <meta name="description" content="NFToyer – A primeira empresa brasileira de Figuras Colecionáveis em NFT, autenticadas oficialmente por estrelas da cultura pop nacional." />
                    <link rel="canonical" href="https://nftoyer.com/"/>
                    <meta property="og:image" content="content=%PUBLIC_URL%/meta.jpg"></meta>
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
