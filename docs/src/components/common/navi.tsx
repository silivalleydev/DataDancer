import React, { useEffect } from 'react';
import { InputBase, Button, Link, Paper, Tab, Tabs } from '@material-ui/core';
import { createStyles, fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import icon from '../../image/giphy.gif';
import giticon from '../../image/github.png';

interface NaviProps {
}

const useStyles = makeStyles((theme)=>
    createStyles({
    root: {
        userSelect:"none",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 10
    },
    img: {
        width: '60px',
        height: '60px',
        paddingLeft: '30px'
    },
    title: {
        color: 'black !important', 
        fontFamily: 'Comic Sans MS',
        maxWidth: 200,
        fontSize: '20px', 
        margin: '5px 0px 0px 20px'
    },
    tabs: {
        backgroundColor: '#fcc5c8'
    },
    tab: {
        maxWidth: "100 !important"
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        width: 80,
        height: 30,
        marginTop: 15,
        marginLeft: 20,
        float: "left"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        marginTop: 10,
        border: "1px solid rgb(197, 195, 195)",
        width: '100%',
        height: 40,

        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        marginTop: 3
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        giticon: {
            width: '37px',
            height: '37px',
            margin: '12px 0px 0px 50px'
        }
}));

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
                history.push('/doc/getting-start')
                break;
            case 3:
                history.push('/contact')
                break;
        }
    };

    const handleNav = (path: string) => {
        if (path === '/') setValue(1);
        if (path === '/doc/getting-start') setValue(2);
        if (path === '/contact') setValue(3);
        if (path === '/community') setValue(4);
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
                        fullWidth={true}
                    />
                    <Tab className={classes.tab} fullWidth={true} label="Docs"/>
                    <Tab className={classes.tab} fullWidth={true} label="Contact"/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                        <Link href="https://github.com/wisemk79/DataDancer" target="_blank">
                            <img src={giticon} className={classes.giticon} alt="icon" />
                        </Link>
                </Tabs>
            </Paper>
        )
}


export default Navi;