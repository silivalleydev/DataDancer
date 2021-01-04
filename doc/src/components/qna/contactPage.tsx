import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';

interface QnAPageProps {
}


const useStyles = makeStyles({
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
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    )
}

export default QnAPage;