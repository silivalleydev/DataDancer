import React, { useEffect, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Fade } from "@material-ui/core";
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
        opacity: 0.8,
        width: '100%',
        height: '480px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    title: {
        zIndex: 10,
        color: 'white',
        fontSize: 80,
        top: 100,
        marginLeft: "15%",
        position: 'relative'
    },
    detail: {
        zIndex: 10,
        color: 'white',
        fontSize: 30,
        top: 120,
        marginLeft: "18%",
        position: 'relative',
        fontWeight: 100
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
    const [checked, setChecked] = React.useState(false);

    /**
     * variables
     */
    const classes = useStyles();

    /**
     * useEffect
     */
    useEffect(() => {
        !checked && setChecked(true);
    })

    /**
     * methods
     */

    return(
        <Grid item xs={12} className={classes.backimage}>
            <Grid item xs={12} className={classes.cover}>
                <Grid className={classes.title} item>
                    DataDancer
                </Grid>
                <Grid className={classes.detail} item>
                    {`You can easily get special Data with DataDancer!`}

                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingIntro;