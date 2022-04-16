import React, { Component, useRef, Suspense } from "react";
import { Canvas, Mesh, } from '@react-three/fiber'
import { PresentationControls, ContactShadows, Stage, Float, Loader, Environment, SpotLight } from '@react-three/drei'
import Model from "../../model";
import Model00 from "../../model00";
import { Link } from "react-router-dom";


class About extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">

                                    <Suspense fallback={<Loader />}>
                                        <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 25] }} flat dpr={[1, 2]} >  
                                        <pointLight position={[-5, -1, 2]} color="#e8882a" intensity={3}/>                                          
                                            <pointLight position={[5, -6, -1]} color="#4f00a3" intensity={5} />
                                            
                                            <Environment preset="city" />        
                                            <PresentationControls speed={1} config={{ mass: 3, tension: 400 }} rotation={[0, -50, 0]} snap polar={[-Math.PI / 3, Math.PI / 2]} azimuth={[-Math.PI / 0.5, Math.PI / 0.5]} global>
                                                <Model00 />
                                            </PresentationControls>
                                            {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, 0, 0]} color={} width={10} height={10} blur={2.6} far={2} /> */}
                                        </Canvas>
                                    </Suspense>
                                    <img src="/assets/images/about/touchinteraction.png" />

                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12" style={{ paddingTop: '80px' }}>
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Sobre</h2>
                                        <p className="description">Somos a primeira empresa brasileira de<spam style={{ fontWeight: '900' }}> Figuras Colecionáveis em NFT, autenticadas oficialmente</spam> por estrelas da cultura pop nacional.</p>

                                        <div className="container">
                                            <div className="row">
                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10px' }}>
                                                    <Link to={`/chorao`}>
                                                        <img src="/assets/images/team/parceiro-01.png" alt="Parceiros" />
                                                    </Link>
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>@chorao</text>
                                                </div>

                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', marginLeft: '15px' }}>
                                                    <img src="/assets/images/team/parceiro-00.png" alt="Parceiros" />
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>Em breve</text>
                                                </div>

                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', marginLeft: '15px' }}>
                                                    <img src="/assets/images/team/parceiro-00.png" alt="Parceiros" />
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>Em breve</text>
                                                </div>

                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', marginLeft: '15px' }}>
                                                    <img src="/assets/images/team/parceiro-00.png" alt="Parceiros" />
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>Em breve</text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">NFTOYERs</h3>
                                                <p style={{ textAlign: "justify" }}>Cada coleção trará uma estrela em sua versão NFTOYER®, contextualizada a um tema que representa sua personalidade e seu universo. As figuras são comercializadas dentro de suas próprias embalagens, para preservar seu estado de conservação e traz consigo alguns itens que formam o conjunto daquela edição. Nossa fábricação de brinquedos digitais opera de forma única. As coleções tem tiragens limitadas e não serão relançadas por nós novamente!</p>
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