import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, TableContainer, Table, TableBody, TableRow, TableCell, Grid, TableHead, Typography } from '@material-ui/core';
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
    input: {
        width: 400,
        resize: "none"
    },
    button: {
        width: 200,
        padding: 10,
        border: "1px solid #EFE5E1",
        backgroundColor: '#EFE5E1'
    },
    row: {
        border: "none"
    }
});

const QnAPage: React.FunctionComponent<QnAPageProps> = (props) => {
    /**
     * props
     */
    // const { } = props;
    
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
        console.log('??')
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
                <form className={classes.container} onSubmit={sendEmail}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.row} colSpan={2} align="center">
                                        <Typography variant="h4">Contact</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.row} align="center">
                                        <TextField required className={classes.input} id="standard-required" label="Name" size="small" name="user_name"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.row} align="center">
                                        <TextField required type="email" className={classes.input} id="standard-required" label="Email" size="small" name="user_email"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <TableCell className={classes.row} align="center">
                                        <TextField 
                                            id="outlined-basic" 
                                            label="Message" 
                                            variant="outlined" 
                                            multiline={true}  
                                            name="message" 
                                            className={classes.input} 
                                            rows={8}/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.row} colSpan={2} align="center">
                                        <Button color="primary" type="submit" className={classes.button}>Send</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </Grid>
        </Grid>
    )
}

export default QnAPage;