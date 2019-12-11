import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import { 
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  dash: {
    display: 'inline-block',
    position: 'relative',
    bottom: 3,
    width: 26,
    height: 1,
    backgroundColor: '#303c4f'
  },
  gradient: {
      borderImage: 'linear-gradient(135deg, rgba(244,211,121,1) 28%, rgba(241,195,85,1) 51%)',
      borderImageSlice: 1,
      borderWidth: 2,
      borderStyle: 'solid'
  },
  containedButton: {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(244,211,121,1) 28%, rgba(241,195,85,1) 51%)'
  },
  textButton: {
    color: '#fff',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}))

const logo = require('../../public/images/Logo.png?resize&size=600'); 
export const phone = require('../../public/images/icon/call-white.svg'); 

export const Logo = ({...props}) => {
  
  return <img src={logo} alt='логотип Fulogy' {...props}/>
}

export const Light = () => {
  const classes = useStyle();

  return (<div style={{textAlign: 'center'}}>
    <Typography variant='h4' component='span' color='primary.light'>Кухня</Typography>&emsp;
    <div className={classes.dash}></div>&emsp;
    <Typography variant='h4' component='span' color='secondary'>Свет</Typography>&emsp;
    <div className={classes.dash}></div>&emsp;
    <Typography variant='h4' component='span' color='primary.light'>Fulogy</Typography>
  </div>)
}

export const OutlinedButton = ({...props}) => {
  const classes = useStyle();

  return <Button {...props} variant="outlined" size="small" className={classes.gradient}>Заказать звонок</Button>
}

export const Contacts = ({icon, ...props}) => {
  return (<>
    <div>
      <Button variant="text" startIcon={
        icon || null
      } href='tel: 8(800) 505 65 33'>
        8 800 505-65-33
      </Button>
    </div>
    <div>
      <OutlinedButton {...props} />
    </div>
  </>
  )
}

export const ContainedButton = ({...props}) => {
  const classes = useStyle();

  return <Button variant="contained" size="large" {...props} className={classes.containedButton}>Заказать светильники</Button>
}

export const TextButton = ({children, ...props}) => {
  const classes = useStyle();
  
  return <Button variant="text" size="small" endIcon={
    <ChevronRight />
  } {...props}>
    <Typography variant='body1' component='div' className={classes.textButton}>
      {children}
    </Typography>
  </Button>
}