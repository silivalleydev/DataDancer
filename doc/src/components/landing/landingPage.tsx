import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import LandingIntro from './landingIntro';

interface LandingPageProps {
}


const useStyles = makeStyles({
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
        <Grid container>
            <LandingIntro/>
        </Grid>
    )
}

export default LandingPage;