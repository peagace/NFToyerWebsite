import React, { Component, useRef, Suspense } from "react";
import { Canvas, Mesh, } from '@react-three/fiber'
import { PresentationControls, ContactShadows, Stage, Float, Loader, Environment } from '@react-three/drei'
import Model from "../../model";
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
                                            {/* <directionalLight color="#4f00a3" position={[30, 0, 5]} intensity={10} />                                                
                                                <directionalLight color="#4f00a3" position={[2, 1, -15]} intensity={50}/> */}
                                            {/* <directionalLight color="purple" position={[5, 0, 10]}  intensity={1}/> */}
                                            <pointLight position={[10, 5, -10]} color="#4f00a3" intensity={10} />
                                            <pointLight position={[-10, 0, -15]} color="#e8882a" intensity={5} />
                                            <Environment preset="studio" />
                                            <PresentationControls speed={2} config={{ mass: 3, tension: 500 }} rotation={[0, -50, 0]} snap polar={[-Math.PI / 3, Math.PI / 2]} azimuth={[-Math.PI / 0.5, Math.PI / 0.5]} global>
                                                <Model />
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
                                        <p className="description">Somos a primeira empresa brasileira de<spam style={{fontWeight:'900'}}> Figuras Colecionáveis em NFT, autenticadas oficialmente</spam> por estrelas da cultura pop nacional.</p>

                                        <div className="container">
                                            <div className="row">
                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'10px' }}>
                                                    <Link to={`/chorao`}>
                                                    <img src="/assets/images/team/parceiro-01.png" alt="Parceiros" />
                                                    </Link>
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>@chorao</text>
                                                </div>

                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'10px', marginLeft:'15px' }}>
                                                    <img src="/assets/images/team/parceiro-00.png" alt="Parceiros" />
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>Em breve</text>
                                                </div>

                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'10px', marginLeft:'15px' }}>
                                                    <img src="/assets/images/team/parceiro-00.png" alt="Parceiros" />
                                                    <text style={{ fontSize: '10px', textTransform: 'uppercase', textAlign: 'center', lineHeight: '12px', marginTop: '10px', color: '#c6c9d8bf' }}>Em breve</text>
                                                </div>

                                                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'10px', marginLeft:'15px' }}>
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
                                                <p  style={{textAlign:"justify"}}>Tem a marra brasileira, com um traço único, moderno e estilizado. Em cada produto é possível ver a personalidade e a atitude da celebridade transformada em um NFTOYER. Cada figura é comercializada dentro de sua própria embalagem e traz consigo alguns itens que formam o conjunto daquela edição.</p>
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