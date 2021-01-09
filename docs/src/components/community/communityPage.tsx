import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormGroup, Input, TextareaAutosize, TableContainer, Table, TableBody, TableRow, TableCell, Grid, ButtonBase, TableHead } from '@material-ui/core';
import emailjs from 'emailjs-com';
import BoardTable from '../common/boardTable';

interface CommunityPageProps {
}


const useStyles = makeStyles({
    container: {
    },
    table: {
        width: '60%',
        marginTop: '5%'
    },
    input: {
    },
    button: {
    },
    row: {
    }
});

const CommunityPage: React.FunctionComponent<CommunityPageProps> = (props) => {
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
        <Grid container justify="center" alignItems="center">
            <Grid item className={classes.table}>
                <BoardTable/>
            </Grid>
        </Grid>
    )
}

export default CommunityPage;