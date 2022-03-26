import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Collectible',
        title: '#01 Chorão Skatista - Gold',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: 'image-2',
        category: 'Collectible',
        title: '#01 Chorão Skatista - Silver',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: 'image-3',
        category: 'Collectible',
        title: '#01 Chorão Skatista - Carbon',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: 'image-4',
        category: 'Acessório',
        title: '#01 Chorão Skatista - Acessório',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: 'image-5',
        category: 'Blueprint',
        title: '#01 Chorão Skatista - Blueprint',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    {
        image: 'image-6',
        category: 'Concept 2D',
        title: '#01 Chorão Skatista - Concept',
        linkCompra: 'https://opensea.io/nftoyer'
    },
    ,
    {
        image: 'image-1',
        category: 'Mistery Box',
        title: '#01 Chorão Skatista - Mistery Box',
        linkCompra: 'https://opensea.io/nftoyer'
    }
]

class PortfolioListChorao extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={value.linkCompra}>Comprar</a>
                                    </div>
                                </div>
                            </div>
                            {/* <Link className="link-overlay" to="/portfolio-details"></Link> */}
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioListChorao;