import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  blockStyle: {
    position: 'relative',
    border: '1px solid transparent',
    borderRadius: 5,
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '16px 64px 16px 16px',
    boxShadow: '0 0 0 0 rgba(0,0,0, 0)',
    transition: 'all 1s ease',
    '&:hover': {
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',
      border: '1px solid #efefef',
      '& div:nth-child(1n)': {
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(244,211,121,1) 28%, rgba(241,195,85,1) 51%)' 
      },
    },
  },
  gradientLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 5,
    height: '100%',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(239,239,239,1) 28%, rgba(214,215,221,1) 51%)', 
    transition: 'all 1s ease',
  }
}))

export const HorizontalBlock = ({children, ...props}) => {
  const classes = useStyle();

  return(
    <div className={classes.blockStyle} {...props}>
      <div className={classes.gradientLine} />
      {children}
    </div>
  )
}