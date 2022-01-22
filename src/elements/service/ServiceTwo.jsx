import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiGift, FiUploadCloud, FiTrendingUp, FiImage } from "react-icons/fi";

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

class ServiceTwo extends Component{
    render(){
        let title = 'Por que um NFT?',
        description = 'Não importa a sua idade, tão pouco o tamanho da sua carteira de criptomoedas, ter um NFToyer é a oportunidade de ter uma peça única de sua estrela predileta em sua coleção. Tenha a posse de um artigo autenticado único de um artista consagrado, que não corre riscos de deterioração com o tempo, que não irá ocupar espaço em sua casa e faça parte do futuro dos investimentos.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="#contato"><span className="text">Está com dúvidas? Entre em contato</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
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
