import React, { useState } from 'react';

import {makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  text: {
    height: 0,
    transition: 'all 1s ease',
  },
  toggleButton: {
    position: 'relative',
    opacity: 1,
    border: '1px solid #ebebeb',
    borderRadius: 5,
    boxSizing: 'border-box',
    padding: '32px 16px',
    backgroundColor: '#fff',
    boxShadow: '0 0 0 0 rgb(0,0,0)',
    transition: 'all 1s ease',
      '&:hover': {
        opacity: 0,
        '& div:nth-child(1n)': {
          height: '100%',
          transition: 'all 1s ease',
          backgroundColor: theme.palette.primary.main,
          boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',
          
      }
    }
  }

}))

export const ToggleBlock = ({children, title, ...props}) => {
  const classes = useStyle();
  const[toggle, setToggle] = useState(false);

  return(
    <div id='container'>
      <div className={classes.toggleButton} {...props}>
        <Typography variant='h2' component='h2' align='center'>{title}</Typography>
      </div>
      <div className={classes.text}>
        {children}
      </div>
    </div>
  )  
}
