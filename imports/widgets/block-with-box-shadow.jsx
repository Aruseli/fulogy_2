import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  shadowBlock: {
    backgroundColor: theme.palette.primary.main,
  }
}))

export const ShadowBlock = ({children, ...props}) => {
  const classes = useStyle();

  return(
    <div className={classes.shadowBlock} {...props}>
      {children}
    </div>
  )
}