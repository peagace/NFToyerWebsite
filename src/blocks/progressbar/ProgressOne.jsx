import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressOne = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            <div className="single-progress">
                <h4 style={{maxWidth:'90%'}}>1. Lançamento de mais estrelas</h4>
                <p style={{marginTop:"-15px", maxWidth:'90%'}}>NFTOYERs de todas as estrelas nacionais.</p> 
                  
                <ProgressBar now={10}/>
                <span className="label">10%</span>
            </div>

            <div className="single-progress">
                <h4 style={{maxWidth:'90%'}}>2. App de Realidade Aumentada</h4>
                <p style={{marginTop:"-15px", maxWidth:'90%'}}>Aplicativo mobile permite a visualização da sua coleção de NFTOYERs de forma interativa, através da Realidade Aumentada.</p> 
                  
                <ProgressBar now={5}/>
                <span className="label">5%</span>
            </div>

            <div className="single-progress">
                <h4 style={{maxWidth:'90%'}}>3. App de TV</h4>
                <p style={{marginTop:"-15px", maxWidth:'90%'}}>Aplicativo para Smart TV's que permite a exibição da sua coleção com de NFTOYERs com a função Modo Arte.</p> 
                  
                <ProgressBar now={2}/>
                <span className="label">2%</span>
            </div>

            <div className="single-progress">
                <h4 style={{maxWidth:'90%'}}>4. METAVERSO</h4>
                <p style={{marginTop:"-15px", maxWidth:'90%'}}>A sua coleção de NFTOYERs para o Metaverso da META e outras plataformas.</p> 
                  
                <ProgressBar now={0}/>
                <span className="label">0%</span>
            </div>

            <div className="single-progress">
                <h4 style={{maxWidth:'90%'}}>5. Expansão Internacional</h4>
                <p style={{marginTop:"-15px", maxWidth:'90%'}}>NFTOYERs para o mundo. Criação de estrelas internacionais.</p> 
                  
                <ProgressBar now={0}/>
                <span className="label">0%</span>
            </div>

            <div className="single-progress">
                <h4 style={{maxWidth:'90%'}}>6. Produção física</h4>
                <p style={{marginTop:"-15px", maxWidth:'90%'}}>NFTOYERs fora do digital. Bonecos físicos para os holders dos NFTs.</p> 
                  
                <ProgressBar now={0}/>
                <span className="label">0%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressOne
