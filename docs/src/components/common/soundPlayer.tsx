import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Link, Avatar } from "@material-ui/core";


interface SoundPlayerProps {
    onClick: () => void,
    corX: number,
    corY: number
}

const useStyles = makeStyles({
    root: {
        zIndex:100,
        position: "fixed",
        width: 50,
        height: 50,
        backgroundColor: "blue",
        transition: "top .5s ease-in-out, left .5s ease-in-out",
    }
});

const SoundPlayer: React.FunctionComponent<SoundPlayerProps> = (props) => {
    /**
     * props
     */
    const { onClick, corX, corY } = props;

    /**
     * states
     */

    /**
     * variables
     */
    const classes = useStyles();

    /**
     * useEffect
     */
    useEffect(() => {
        
    })

    /**
     * methods
     */

        return(
            <div 
                onMouseDown={onClick} 
                style={{top: corY - 20, left: corX - 20}} 
                className={classes.root}>
            </div>
        )
}


export default SoundPlayer;