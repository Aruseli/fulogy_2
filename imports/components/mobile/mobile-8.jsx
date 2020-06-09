import React, { useState } from 'react';

import { Typography, Button, makeStyles } from '@material-ui/core';

const img1 = require('../../../images/1-1.jpg');
const img2 = require('../../../images/1-2.jpg');
const img3 = require('../../../images/1-3.jpg');
const img4 = require('../../../images/1-4.jpg');
const img5 = require('../../../images/1-5.jpg');
const img6 = require('../../../images/1-6.jpg');
const img7 = require('../../../images/1-7.jpg');
const img8 = require('../../../images/1-8.jpg');
const img9 = require('../../../images/1.jpg');

const useStyle = makeStyles(theme => ({
  imgStyle: {
    width: '100%'
  },
  imgBlock: {
    padding: 16
  },
  textButton: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.primary.main,
      fontSize: 17
    }
  }
}))

const TextButton = ({children, ...props}) => {
  
  return <Button variant="text" size="small" {...props}>
    <Typography variant='body1' component='div'>
      {children}
    </Typography>
  </Button>
}

export const MobileEight = () => {
  const classes = useStyle();
  const[open, setOpen] = useState(false);

  const onClick = () => setOpen(!open)

  return(
    <div style={{position: 'relative', paddingTop: 48}}>
      <Typography variant='h2' component='h1' align='center' style={{padding: '32px 0'}}>Галерея</Typography>
      <div className={classes.imgBlock}>
        <img src={img1} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
      </div>
      <div className={classes.imgBlock}>
        <img src={img2} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
      </div>
      <div className={classes.imgBlock}>
        <img src={img3} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
      </div>
      <div className={classes.imgBlock}>
        <img src={img4} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
      </div>
      { open 
        ? <>
        <div className={classes.imgBlock}>
          <img src={img5} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
        </div>
        <div className={classes.imgBlock}>
          <img src={img6} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
        </div>
        <div className={classes.imgBlock}>
          <img src={img7} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
        </div>
        <div className={classes.imgBlock}>
          <img src={img8} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
        </div>
        <div className={classes.imgBlock}>
          <img src={img9} alt='освещение кухонной рабочей зоны от Fulogy' className={classes.imgStyle} /> 
        </div>
      </>
        : null
      }
      <div style={{textAlign: 'center', padding: '48px 0'}}>
        <TextButton onClick={onClick}>{ open ? 'Скрыть' : 'Смотреть еще' }</TextButton>
      </div>
    </div>
  )
}