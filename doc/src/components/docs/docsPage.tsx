import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import DocsSideMenu from './docsSideMenu';
import DocsContent from './docsContent';


interface DocsPageProps {
}

const useStyles = makeStyles((theme) => ({
}));

const DocsPage: React.FunctionComponent<DocsPageProps> = (props) => {
    /**
     * props
     */
    const { } = props;

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
            <Grid container>
                <DocsSideMenu/>
                <DocsContent/>
            </Grid>
        )
}


export default DocsPage;