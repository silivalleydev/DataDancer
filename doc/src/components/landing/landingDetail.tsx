import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';

interface LandingDetailProps {
}


const useStyles = makeStyles({
    root: {
    },
    paper: {
        margin: '30px 0 0 40px',
        padding: 30,
        height: 300,
        width: 400,
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    title: {
        fontSize:20,
        borderBottom: '1px solid #ffff',
        fontWeight: "bold"
    }
});

const LandingDetail: React.FunctionComponent<LandingDetailProps> = (props) => {
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
    const contents = [{
        id: 0,
        title: "Get Random Name By country!",
        content: ""
    }, {
        id: 1,
        title: "Get Random Data!",
        content: ""
    }, {
        id: 2,
        title: "Easy to Object Array Sort & Search",
        content: ""
    }, {
        id: 3,
        title: "Easy to Control Date",
        content: ""
    }]

    /**
     * methods
     */

    return(
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center" spacing={0}>
                {contents.map((content) => (
                    <Grid key={content.id} item>
                        <Paper className={classes.paper}>
                            <Grid item className={classes.title}>
                                {content.title}
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default LandingDetail;