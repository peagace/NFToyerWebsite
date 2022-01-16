import React, { Component, useRef, Suspense } from "react";
import { Canvas, Mesh,  } from '@react-three/fiber'
import { PresentationControls, ContactShadows, Stage, Float, Loader, Environment } from '@react-three/drei'
import Model from "../../model";

class About extends Component {
    render() {
        let title = 'Sobre',
            description = 'Somos a primeira empresa Brasileira de desenvolvimento de figuras colecionáveis digitais licenciadas oficiais em NFT de estrelas e celebridades da cultura pop nacional.';
        return (
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    
                                    <Suspense fallback={<Loader />}>
                                        <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }} flat dpr={[1, 2]} >
                                                {/* <directionalLight color="#4f00a3" position={[30, 0, 5]} intensity={10} />
                                                
                                                <directionalLight color="#4f00a3" position={[2, 1, -15]} intensity={50}/> */}
                                                {/* <directionalLight color="purple" position={[5, 0, 10]}  intensity={1}/> */}
                                                <pointLight position={[10, 5, -10]} color="#4f00a3" intensity={10}/>
                                                <pointLight position={[-10, 0, -15]} color="#e8882a" intensity={5}/>
                                                <Environment preset="studio"/>
                                                <PresentationControls speed={2} config={{ mass: 3, tension: 500 }} rotation={[0, -50, 0]} snap polar={[-Math.PI / 3, Math.PI / 2]} azimuth={[-Math.PI / 0.5, Math.PI / 0.5]} global>
                                                        <Model/>          
                                                </PresentationControls>
                                                {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, 0, 0]} color={} width={10} height={10} blur={2.6} far={2} /> */}
                                        </Canvas>
                                    </Suspense>
                                    <img src="/assets/images/about/touchinteraction.png"/>
                                    
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">NFTs</h3>
                                                <p>NFT (non-fungibletoken) são ativos criptográficos não fungíveis, autenticando a propriedade digital através de um registro em uma blockchain. Graças a essa tecnologia, uma obra de arte digital pode ser considerada original e única, despertando o interesse de colecionadores de arte no mundo todo. Um mercado que movimentou mais de US$13,2 bilhões em 2021.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">NFToyers</h3>
                                                <p>São os nossos bonecos digitais! Artistas e celebridades convertidos ao Metaverso, de uma forma divertida e descontraída, com um toque de malandragem!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;