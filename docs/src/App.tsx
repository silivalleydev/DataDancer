import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import Navi from './components/common/navi'
import LandingPage from './components/landing/landingPage';
import Footer from './components/common/footer';
import CommunityPage from './components/community/communityPage';
import DocsPage from './components/docs/docsPage';
import ContactPage from './components/contact/contactPage';


interface AppProps {
}

const useStyles = makeStyles({
    nav: {
        marginBottom: 61
    }
});

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
     * variables
     */
    const classes = useStyles();
    
    /**
     * methods
     */

        return (
            <Switch>
                <Grid container>
                    <Grid item xs={12} className={classes.nav}>
                        <Navi/>
                    </Grid>
                    <Grid item xs={12}>
                        <Switch>
                            <Route path="/" component={LandingPage} exact/>
                            <Route path="/doc" component={DocsPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route path="/community" component={CommunityPage}/>
                            <Route component={LandingPage}/>
                        </Switch>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer/>
                    </Grid>
                </Grid>
            </Switch>
        )
}

export default App;