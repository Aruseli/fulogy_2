import React, { useState } from 'react';

import {Typography, makeStyles} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  openBlock: {
    position: 'relative',
    border: '1px solid #ebebeb',
    borderRadius: 5,
    height: '100%',
    boxSizing: 'border-box',
    padding: '32px 16px',
    transition: 'all 1s ease',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',
  },
  closeBlock: {
    position: 'relative',
    border: '1px solid #ebebeb',
    borderRadius: 5,
    height: '100%',
    boxSizing: 'border-box',
    padding: '32px 16px',
    backgroundColor: '#fff',
    boxShadow: '0 0 0 0 rgb(0,0,0)',
    transition: 'all 1s ease'
  },
  arrowButton: {
    position: 'absolute',
    bottom: -15,
    left: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#f1c355',
    borderColor: theme.palette.primary.light,
    boxShadow: '0 15px 30px rgba(0,0,0,0.7)'
  }
  
}))

export const OpenedBlock = ({title, children, ...props}) => {
  const classes = useStyle();
  const[open, setOpen] = useState(false);

  const onClick = () => setOpen(!open);

  return(<>
    { open 
    ? <div className={classes.openBlock} {...props}>
        <div className={classes.arrowButton} onClick={onClick}>
          <KeyboardArrowUp style={{padding: 3}} />
        </div>
          <div style={{overflow: 'hidden', height: '100%', transition: 'all 1s ease'}}>{children}</div>
      </div>
    : <div className={classes.closeBlock} {...props}>
        <div className={classes.arrowButton} onClick={onClick}>
          <KeyboardArrowDown style={{padding: 3}} /> 
        </div>
        <Typography variant='h2' component='h2' align='center'>{title}</Typography>
        <div style={{overflow: 'hidden', height: 0, transition: 'all 1s ease'}}>{children}</div>
      </div>
    }
    </>
  )
}

export const AlwaysOpen = ({children, ...props}) => {
  const classes = useStyle();

  return(
    <div className={classes.openBlock} {...props}>
      <div>{children}</div>
    </div>
  )
}