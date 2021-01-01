import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './App.css';
import Navi from './components/common/navi'
import LandingPage from './components/landing/landingPage';
import Footer from './components/common/footer';
import DocsPage from './components/docs/docsPage';
import GettingStartPage from './components/gettingstart/gettingStartPage';
import QnAPage from './components/qna/qnaPage';


interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {

    /**
     * states
     */


    /**
     * useEffect
     */
    useEffect(() => {
        
    })

    /**
     * methods
     */

        return (
            <Router>
                <Grid container>
                    <Grid item xs={12}>
                        <Navi/>
                    </Grid>
                    <Grid item xs={12}>
                        <Route path="/" component={LandingPage} exact/>
                        <Route path="/docs" component={DocsPage}/>
                        <Route path="/getting-start" component={GettingStartPage}/>
                        <Route path="/qna" component={QnAPage}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer/>
                    </Grid>
                </Grid>
            </Router>
        )
}

export default App;