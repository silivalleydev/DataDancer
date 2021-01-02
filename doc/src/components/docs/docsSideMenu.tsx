import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Toolbar, List, Divider, ListItem, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import DocsAccordian from './docsAccordian';


interface DocsSideMenuProps {
}

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 1
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

const DocsSideMenu: React.FunctionComponent<DocsSideMenuProps> = (props) => {
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
    const contents = ['Inbox', 'Starred', 'Send email', 'Drafts'];
    const [expanded, setExpanded] = React.useState('panel1');

    /**
     * useEffect
     */
    useEffect(() => {
        
    })

    /**
     * methods
     */

    const handleChange = (panel: any) => (event: any, newExpanded: any) => {
      setExpanded(newExpanded ? panel : false);
    };
  
        return(
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {contents.map((text, index) => (
              <ListItem button key={text}>
                <DocsAccordian/>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
        )
}


export default DocsSideMenu;