import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import Navi from './components/common/navi'
import LandingPage from './components/landing/landingPage';
import Footer from './components/common/footer';
import DocsPage from './components/docs/docsPage';
import ContactPage from './components/contact/contactPage';
import SoundPlayer from './components/common/soundPlayer';


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
    const [x, setX] = useState(100);
    const [y, setY] = useState(300);
    const [dragOn, setDragOn] = useState(false);

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
    const handleClick = () => {
        setDragOn(true);
    }
    const handleMouseUp = () => {
        setDragOn(false);
    }

    const handleMouseOver = (e: any) => {
        if (dragOn) {
            setY(e.clientY);
            setX(e.clientX);
        }
    }

        return (
            <Switch>
                <Grid container onMouseOver={handleMouseOver}  onMouseUp={handleMouseUp}>
                    <SoundPlayer onClick={handleClick} corX={x} corY={y}/>
                    <Grid item xs={12} className={classes.nav}>
                        <Navi/>
                    </Grid>
                    <Grid item xs={12}>
                        <Switch>
                            <Route path="/" component={LandingPage} exact/>
                            <Route path="/doc" component={DocsPage}/>
                            <Route path="/contact" component={ContactPage}/>
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