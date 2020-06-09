import React from 'react';

import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    width: 57,
    height: 57,
    overflow: 'hidden',
    borderRadius: '50%',
    position: 'absolute'
  }
}))

export const Circle = ({children, ...props}) => {
  const classes = useStyle();

  return(
    <div className={classes.root} {...props}>
      {children}
    </div>
  )
}