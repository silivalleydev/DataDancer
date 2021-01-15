import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { SubdirectoryArrowRight } from '@material-ui/icons'

type Menu = {
  path: string,
  name: string,
  file: any,
  child: Menu[]
}

interface AccordianItemProps {
  name: string,
  child: Menu[],
  handleClick: (path: string) => void
}


const useStyles = makeStyles((theme) => ({
  root: {
    userSelect:"none",
    width: '100%',
  },
  item: {
    boxShadow: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: '190px',
  },
  list: {
    padding: 0
  },
  listitem: {
    width: '230px',
    fontSize: theme.typography.pxToRem(15)
  },
  detail: {
    padding: 0
  }
}));

const AccordianItem: React.FunctionComponent<AccordianItemProps> = (props) => {
    /**
     * props
     */
    const { name, child, handleClick } = props;

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
            <Typography className={classes.heading}>{name}</Typography>
          </AccordionSummary>
              <AccordionDetails className={classes.detail}>
                <List className={classes.list}>
                  {child.map((child, index)=>{
                        return (
                            <ListItem className={classes.listitem} button key={`accordianchilditem-${index}`} onClick={()=>handleClick(child.path)}>
                                  <ListItemIcon>
                                    <SubdirectoryArrowRight/>
                                  </ListItemIcon>
                                  <Typography className={classes.heading}>{child.name}</Typography>
                            </ListItem>
                        ) 
                      }
                    )}
                </List>
              </AccordionDetails>
        </Accordion>
        )
}


export default AccordianItem;