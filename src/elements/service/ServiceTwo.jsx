import React, { Component, useState } from "react";
import { FiX, FiGift, FiUploadCloud, FiTrendingUp, FiImage } from "react-icons/fi";
import { ReactDOM } from "react";
import ReactModal from 'react-modal';

const ServiceList = [
    {
        icon: <FiImage />,
        title: 'Colecione',
        description: 'Adquira as figuras colecionáveis das suas estrelas favoritas.'
    },
    {
        icon: <FiTrendingUp />,
        title: 'Invista',
        description: 'Peças raras e exemplares únicos com valores mais altos ao passar dos anos.'
    },
    {
        icon: <FiUploadCloud />,
        title: 'Inclusão',
        description: 'O caminho mais fácil e estiloso para a sua entrada no Metaverso.'
    },
    {
        icon: <FiGift />,
        title: 'Presenteie',
        description: 'Dê um item infungível. Um presente de valor.'
    }
]

class ServiceTwo extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        let title = "O que são NFT's?",
            description = 'Não importa a sua idade, tão pouco o tamanho da sua carteira de criptomoedas, ter um NFTOYER é a oportunidade de ter uma peça única de sua estrela predileta em sua coleção. Tenha a posse de um artigo autenticado único de uma estrela consagrada, que não corre riscos de deterioração com o tempo, que não irá ocupar espaço em sua casa e faça parte do futuro dos investimentos.';

        return (
            <React.Fragment>
                <div style={{ zIndex: '999' }}>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        style={{
                            overlay: {
                                backgroundColor: '#101010',
                                zIndex: '999',
                                cursor: 'default'
                            },
                            content: {
                                backgroundColor: '#101010',
                                zIndex: '999',
                                position:'absolute',
                                top:0,
                                bottom:0,
                                left:0,
                                right:0,
                                borderColor: "transparent",

                            },
                            zIndex: '999',

                        }}
                    >

                        <div className="active-dark" >
                            <div className="col-lg-12" >
                                <div className="section-title text-left mb--30" >
                                    <FiX style={{ position: 'absolute', top: '0%', left: '95%', cursor: 'pointer' }} size={50} color={'white'} onClick={this.handleCloseModal} />
                                    
                                    <h2 className="title" style={{ color: "white", maxWidth:'85%', marginTop:'50px' }}>Como comprar um NFT</h2>
                                    <p style={{ color: "white", maxWidth:'95%', marginTop:'20px', marginBottom:'60px'}}>Siga o passo a passo para realizar a compra de um NFT na plataforma <a href="https://opensea.io" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>OpenSea!</a></p>

                                    <h4 >1. Compre o Ethereum (ETH) em alguma exchange</h4>
                                    <p style={{marginTop:"-5px", marginBottom:'50px'}}>Para comprar NFTs é necessário fazer a transação com Criptomoedas. Recomendamos a <a href="https://www.binance.com/pt-BR" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>binance.com</a> que aceita pagamentos em PIX!</p>

                                    <h4 style={{maxWidth:'95%'}}>2. Crie sua carteira na <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>MetaMask</a></h4>
                                    <p style={{marginTop:"-5px", maxWidth:'95%', marginBottom:'50px'}}>A carteira digital será responsável por armazenar as suas CriptoMoedas e os seus NFTs.</p>

                                    <h4 style={{maxWidth:'95%'}}>3. Transferir o seu ETH para a sua MetaMask</h4>
                                    <p style={{marginTop:"-5px", maxWidth:'95%', marginBottom:'50px'}}>Algumas taxas são cobradas para fazer a transferência. Separamos um <a href="https://academy.binance.com/pt/articles/how-to-use-metamask" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>artigo</a> que ensina passo a passo tudo que você deve saber para fazer essa transação com segurança.</p>

                                    <h4 style={{maxWidth:'95%'}}>4. Conecte sua carteira MetaMask com o OpenSea</h4>
                                    <p style={{marginTop:"-5px", maxWidth:'95%', marginBottom:'50px'}}>Para <a href="https://opensea.io/login?referrer=%2Faccount" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>criar sua conta OpenSea</a> é necessário conectar a sua carteira MetaMask.</p>

                                    <h4 style={{maxWidth:'95%'}}>5. Compre o seu NFTOYER</h4>
                                    <p style={{marginTop:"-5px", maxWidth:'95%', marginBottom:'50px'}}><a href="https://opensea.io/nftoyer" target="_blank" rel="noopener noreferrer" style={{color:'#8f5eef'}}>Escolha o seu NFTOYER</a> e finalize as transações a partir da MetaMask.</p>

                                    <div className="service-btn">
                                        <a className="btn-transparent rn-btn-dark" onClick={this.handleCloseModal} style={{ cursor: 'pointer' }}><span className="text">Fechar</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactModal>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" onClick={this.handleOpenModal} style={{ cursor: 'pointer' }}><span className="text">Como comprar um NFT</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map((val, i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>)
    }
}

export default ServiceTwo;
