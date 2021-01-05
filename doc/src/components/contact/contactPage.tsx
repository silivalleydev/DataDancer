import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormGroup, Input, TextareaAutosize, TableContainer, Table, TableBody, TableRow, TableCell, Grid, ButtonBase, TableHead } from '@material-ui/core';
import emailjs from 'emailjs-com';

interface QnAPageProps {
}


const useStyles = makeStyles({
    container: {
        width: 500,
        marginTop: "25%",
        marginBottom: "25%",
        alignContent: "center",
        border: "1px solid rgb(197, 195, 195)",
        borderRadius: 3,
        position: "relative",
        padding: 30,
        backgroundColor: "white",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        padding: 30
    },
    input: {
        width: 300
    },
    button: {
        width: 200,
        padding: 10,
        border: "1px solid rgb(197, 195, 195)",
        backgroundColor: 'rgb(197, 195, 195)'
    },
    row: {
        border: "none"
    }
});

const QnAPage: React.FunctionComponent<QnAPageProps> = (props) => {
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
    const message = `Your inquiry has been received.
    We are going to reply to your inquiry as soon as possible.`

    
    

    /**
     * methods
     */
    const sendEmail = (e: any) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k4tkc5b', 'template_uc2vr8n', e.target,'user_wiHXYPsnvpM66xPANNYn8')
          .then((result) => {
              if (result.text === "OK") alert(message);
          }, (error) => {
              console.log(error);
          });
      }

    return(
        <Grid container justify="center" alignItems="center" style={{backgroundColor: 'rgb(197, 195, 195)'}}>
            <Grid item >
                <FormGroup className={classes.container} onSubmit={sendEmail}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.row} colSpan={2} align="center">
                                    <Grid item className={classes.title}>Contact</Grid>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.row} align="right">
                                        Name:
                                    </TableCell>
                                    <TableCell className={classes.row} align="center">
                                        <Input className={classes.input} type="text" name="user_name" />
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.row} align="right">
                                        Email:
                                    </TableCell>
                                    <TableCell className={classes.row} align="center">
                                        <Input className={classes.input} type="email" name="user_email" />
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.row} align="right">
                                        Message:
                                    </TableCell>
                                    <TableCell className={classes.row} align="center">
                                        <TextareaAutosize rowsMin={8} className={classes.input} name="message" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.row} colSpan={2} align="center">
                                        <Button color="primary" className={classes.button} type="submit">Send</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </FormGroup>
            </Grid>
        </Grid>
    )
}

export default QnAPage;