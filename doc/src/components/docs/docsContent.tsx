import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Markdown from 'markdown-to-jsx';
import { HighlightedMarkdown } from '../common/highlightMarkdown';
import test from '../../markdown/test.md';
import { useLocation } from 'react-router-dom';
console.log(test)

type Menu = {
    path: string,
    name: string,
    file: any,
    child: Menu[]
  }

interface DocsContentProps {
    menu: Menu[]
}


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 80
    }
}));

const DocsContent: React.FunctionComponent<DocsContentProps> = (props) => {
    /**
     * props
     */
    const { menu } = props;

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
    },[])

    /**
     * methods
     */

    // TODO: Redux로 이 함수를 sideMenu로 넘겨줄 것
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
                    <Button onClick={markdownSetter}>ddd</Button>
            </Grid>
        )
}


export default DocsContent;