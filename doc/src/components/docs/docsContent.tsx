import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { HighlightedMarkdown } from '../common/highlightMarkdown';
import { useLocation } from 'react-router-dom';
import { menuChange } from '../../action/index';
import { connect } from 'react-redux'


type Menu = {
    path: string,
    name: string,
    file: any,
    child: Menu[]
  }

interface DocsContentProps {
    menu: Menu[],
    isMenuChanged: boolean,
    menuChange: (data: boolean) => any
}


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 80,
        overflowY: "auto",
        minHeight: '100vh'
    }
}));

const DocsContent: React.FunctionComponent<DocsContentProps> = (props) => {
    /**
     * props
     */
    const { menu, isMenuChanged, menuChange } = props;

    /**
     * states
     */
    const [markdown, setMarkdown] = useState('');

    /**
     * variables
     */
    const classes = useStyles();
    const location = useLocation();

    /**
     * useEffect
     */
    useEffect(() => {
        markdownSetter();
        if (isMenuChanged) {
            markdownSetter();
            menuChange(false);
        }
    })

    /**
     * methods
     */
    const markdownSetter = () => {
        const split = location.pathname.split('/docs/')[1].split('/');
        const idx = menu.map(m=>m.path).indexOf(split[0]);
        if (menu[idx].file) {
            console.log('file exist')
            fetchFile(menu[idx].file);
        } else {
            console.log('file not exist')
            const child = location.pathname.split('/docs/')[1];
            const childIdx = menu[idx].child.map(c=>c.path).indexOf(child);
            fetchFile(menu[idx].child[childIdx].file);
        }
    }

    const fetchFile = (file: any) => {
        const promise = fetch(file);
        promise.then(res=> res.text().then(r=> setMarkdown(r)))
    }
  
        return(
            <Grid className={classes.root}>
                    <HighlightedMarkdown>
                        {markdown}
                    </HighlightedMarkdown>
            </Grid>
        )
}


/**
 * redux
 */
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        isMenuChanged: state.reducer.isMenuChanged
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        menuChange: (data: boolean) =>  dispatch(menuChange(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsContent);