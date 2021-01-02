import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Markdown from 'markdown-to-jsx';
import { HighlightedMarkdown } from '../common/highlightMarkdown';
import test from '../../markdown/test.md';
console.log(test)


interface DocsContentProps {
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
    const { } = props;

    /**
     * states
     */
    const [markdown, setMarkdown] = useState('');
    /**
     * variables
     */
    const classes = useStyles();
    const md = `
        ${test}
        `;
    /**
     * useEffect
     */
    useEffect(() => {
        const a = fetch(test);
        a.then(res=> res.text().then(r=>setMarkdown(r)))
    })

    /**
     * methods
     */
    
  
        return(
            <Grid className={classes.root}>
                    <HighlightedMarkdown>
                        {markdown}
                    </HighlightedMarkdown>
            </Grid>
        )
}


export default DocsContent;