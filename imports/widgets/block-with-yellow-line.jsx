import React from 'react';

import {
  makeStyles,
} from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  blockStyles: {
    position: 'relative',
    border: '1px solid #ebebeb',
    borderRadius: 5,
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '32px 16px',
    boxShadow: '0 0 0 0 rgba(0,0,0, 0)',
    transition: 'all 1s ease',
    [theme.breakpoints.down('sm')]: {
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',
    },
    '&:hover': {
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',
      '& div:nth-child(1n)': {
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(244,211,121,1) 28%, rgba(241,195,85,1) 51%)' 
      },
    },
  },
  gradientLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 5,
    transition: 'all 1s ease',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 5,
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(244,211,121,1) 28%, rgba(241,195,85,1) 51%)' 
    }
  }
}))

export const BlockYellowLine = ({children, ...props}) => {
  const classes = useStyle();

  return(
    <div className={classes.blockStyles} {...props}>
      <div className={classes.gradientLine} />
      {children}
    </div>
  )
}