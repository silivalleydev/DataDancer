import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Link, Avatar } from "@material-ui/core";


interface FooterProps {
}

const useStyles = makeStyles({
    root: {
        userSelect:"none",
        position: 'relative',
        borderTop: "1px solid rgb(238, 238, 238)",
        width: '100%',
    },
    paper: {
        margin: "10px 0 30px 30px",
        backgroundColor: "inherit",
        border: 'none',
        boxShadow: 'none',
        padding: 30,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    created: {
        margin: "10px 0 30px 0",
        backgroundColor: "inherit",
        border: 'none',
        boxShadow: 'none',
        marginTop: 13,
        color: "#c2bbba"
    },
    avatar: {
        top: 14,
        display: 'inline-block'
    },
    me: {
        display:'inline-block',
        marginLeft: 10
    },
    git: {
        marginLeft: 50,
        fontWeight: "normal"
    }
});

const Footer: React.FunctionComponent<FooterProps> = (props) => {
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
                <Grid container justify="center" spacing={0}>
                    <Grid item>
                        <Paper className={classes.created}>
                            <Grid item className={classes.title}>
                                <Grid>
                                    <Avatar 
                                        className={classes.avatar}
                                        alt="wisemk79" 
                                        src="https://avatars2.githubusercontent.com/u/59218281?s=400&u=3b8db4af24e8cd7073ded4895507c6ac7c4777bc&v=4" />
                                    <Grid className={classes.me}>Created By wisemk79</Grid>
                                </Grid>
                                <br/>
                                <Grid className={classes.git}>
                                    Git: <Link href="https://github.com/wisemk79">wisemk79</Link>
                                </Grid>
                                <br/>
                                <Grid className={classes.git}>
                                    Email: wisemk79@gmail.com
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
}


export default Footer;