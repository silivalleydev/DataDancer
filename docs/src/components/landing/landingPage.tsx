import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import LandingIntro from './landingIntro';
import LandingDetail from './landingDetail';

interface LandingPageProps {
}


const useStyles = makeStyles({
    root: {
        marginBottom: 30
    }
});

const LandingPage: React.FunctionComponent<LandingPageProps> = (props) => {
    /**
     * props
     */
    const { } = props;
    
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

    return(
        <Grid container className={classes.root}>
            <LandingIntro/>
            <LandingDetail/>
        </Grid>
    )
}

export default LandingPage;