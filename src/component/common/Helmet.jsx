import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Action Figures em NFT </title>
                    <meta name="description" content="NFToyer – Uma empresa Brasileira que cria e desenvolve NFTs de artistas e figuras públicas em formato de bonecos digitais." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
