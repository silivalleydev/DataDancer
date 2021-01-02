import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import intro from '../../image/main.gif'

interface LandingIntroProps {
}


const useStyles = makeStyles({
    backimage: {
        backgroundImage: `url(${intro})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '480px'
    },
    cover: {
        backgroundColor: 'black',
        opacity: 0.3,
        width: '100%',
        height: '480px',
        boxShadow: '5px 5px 10px 1px #000000;'
    }
});

const LandingIntro: React.FunctionComponent<LandingIntroProps> = (props) => {
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
        <Grid item xs={12} className={classes.backimage}>
            <Grid item xs={12} className={classes.cover}>
                
            </Grid>
        </Grid>
    )
}

export default LandingIntro;