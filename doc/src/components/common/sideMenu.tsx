import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Toolbar, List, Divider, ListItem, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import AccordianItem from './accordianItem';  

type Menu = {
  path: string,
  name: string,
  file: any,
  child: Menu[]
}

interface SideMenuProps {
  menu: Menu[]
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
    list: {
      padding: 0
    },
    listitem: {
      padding:0,
      fontSize: 15
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      width: '190px',
    },
  }));

const SideMenu: React.FunctionComponent<SideMenuProps> = (props) => {
    /**
     * props
     */
    const { menu } = props;

    /**
     * states
     */

    /**
     * variables
     */
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    /**
     * useEffect
     */
    useEffect(() => {

    })

    /**
     * methods
     */
    const handleClick = (path: string) => {
      const newPath = `docs/${path}`;
      history.push('/');
      history.push(newPath);
    }
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
                {menu.map((item, index) => (
                  item.child.length > 0 ? 
                  <ListItem className={classes.listitem} button key={`accordianitem-${index}`}>
                    <AccordianItem name={item.name} child={item.child} handleClick={handleClick}/>
                  </ListItem> :
                  <ListItem button key={`listitem-${index}`} onClick={()=>handleClick(item.path)}>
                    <Typography className={classes.heading}>{item.name}</Typography>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
          </Drawer>
        )
}


export default SideMenu;