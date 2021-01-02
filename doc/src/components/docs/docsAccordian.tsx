import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Toolbar, List, Divider, ListItem, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

interface DocsAccordianProps {
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  item: {
    boxShadow: 'none',
    position: 'relative',
    right: 20
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: '190px',
  },
  list: {
    width: '230px',
  }
}));

const DocsAccordian: React.FunctionComponent<DocsAccordianProps> = (props) => {
    /**
     * props
     */
    const { } = props;

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
          <Accordion className={classes.item}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
              <AccordionDetails>
                  <List>
                    <ListItem className={classes.list} button key={'text'}>
                          <ListItemIcon>{2 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={'text'} />
                    </ListItem>
                    <ListItem className={classes.list} button key={'text'}>
                          <ListItemIcon>{2 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={'text'} />
                    </ListItem>
                  </List>
              </AccordionDetails>
        </Accordion>
        )
}


export default DocsAccordian;