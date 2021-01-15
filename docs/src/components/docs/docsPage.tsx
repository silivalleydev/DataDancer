import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import DocsContent from './docsContent';
import SideMenu from '../common/sideMenu';
import { mdFiles } from '../../mappingMd';


interface DocsPageProps {
}

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100%"
    }
}));

const DocsPage: React.FunctionComponent<DocsPageProps> = (props) => {
    /**
     * props
     */
    // const { } = props;

    /**
     * states
     */

    /**
     * variables
     */
    const classes = useStyles();
    const menu = mdFiles;
    /**
     * useEffect
     */
    useEffect(() => {
        
    })

    /**
     * methods
     */
  
        return(
            <Grid container className={classes.root}>
                <SideMenu menu={menu}/>
                <DocsContent menu={menu}/>
            </Grid>
        )
}


export default DocsPage;