import React, { useEffect } from 'react';
import { Link, Paper, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from 'react-router-dom';
import icon from '../../image/giphy.gif';
import giticon from '../../image/github.png';

interface NaviProps {
}

const useStyles = makeStyles({
    root: {
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex:100
    },
    img: {
        width: '60px',
        height: '60px',
        paddingLeft: '30px'
    },
    title: {
        color: 'black !important', 
        fontFamily: 'Comic Sans MS',
        fontSize: '20px', 
        margin: '5px 50px 0px 20px'
    },
    tabs: {
        backgroundColor: '#fcc5c8'
    },
    link: {
        textDecoration: 'none'
    },
    giticon: {
        width: '37px',
        height: '37px',
        margin: '12px 0px 0px 50px'
    }
});

const Navi: React.FunctionComponent<NaviProps> = (props) => {
    /**
     * props
     */
    const { } = props;

    /**
     * states
     */
    const [value, setValue] = React.useState(1);

    /**
     * variables
     */
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname;

    /**
     * useEffect
     */
    useEffect(() => {
        handleNav(path);
    })

    /**
     * methods
     */
    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 1:
                history.push('/')
                break;
            case 2:
                history.push('/docs')
                break;
            case 3:
                history.push('/getting-start')
                break;
            case 4:
                history.push('/qna')
                break;
        }
    };

    const handleNav = (path: string) => {
        if (path === '/') setValue(1);
        if (path === '/docs') setValue(2);
        if (path === '/getting-start') setValue(3);
        if (path === '/qna') setValue(4);
        
    }
  
        return(
            <Paper square className={classes.root}>
                <Tabs
                    className={classes.tabs}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <img src={icon} className={classes.img} alt="icon" />
                    <Tab 
                        label="DataDancer" 
                        className={classes.title} 
                    />
                    <Tab label="Docs"/>
                    <Tab label="Getting Start"/>
                    <Tab label="Q&A"/>
                    <Link href="https://github.com/wisemk79/DataDancer" target="_blank">
                        <img src={giticon} className={classes.giticon} alt="icon" />
                    </Link>
                </Tabs>
            </Paper>
        )
}


export default Navi;