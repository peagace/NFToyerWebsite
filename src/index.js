// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Demo from './page-demo/Demo';


// Dark Home Layout 


// Element Layout

import Contact from "./elements/Contact";

import error404 from "./elements/error404";


// Blocks Layout


import Gallery from "./blocks/Gallery";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                 {/* <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/> */}
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>


                        {/* Element Layot */}
                        <Route exact path={`${process.env.PUBLIC_URL}/galeria`} component={Gallery}/>                        
                        <Route exact path={`${process.env.PUBLIC_URL}/contato`} component={Contact}/>
                        
                        <Route path={`${process.env.PUBLIC_URL}/`} component={Demo}/>
                        {/* <Route component={error404}/> */}

                    </Switch>
                    {/* <Footer /> */}
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();