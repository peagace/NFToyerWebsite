// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Demo from './page-demo/Demo';
import Soon from './page-demo/Soon';


// Partner Page
import PortfolioChorao from './elements/PortfolioChorao' 


// Element Layout
import HeaderThree from "./component/header/HeaderThree";

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
               {/* <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" /> */}
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Soon}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/chorao`} component={PortfolioChorao}/>
                        <Route path={`${process.env.PUBLIC_URL}/home`} component={Demo}/>
                    </Switch>
                    {/* <Footer/> */}
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();