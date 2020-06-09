import React, { useState } from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import {
  ChevronLeftRounded,
  ChevronRightRounded
} from '@material-ui/icons';

import {Review, items} from '../../widgets/review';

const useStyle = makeStyles((theme) => ({
  line: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    padding: '48px 0'
  },
  slideArea: {
    position: 'relative',
    transition :'left 1s ease'
  },
  slideItem: {
    position: 'relative',
    width: '100vw',
    display: 'inline-block',
    padding: '0 16px',
    boxSizing: 'border-box'
  },
  previewButton: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#242E3D',
    padding: 0,
    '&:hover': {
      backgroundColor: '#313C4F'
    },
    '&:active': {
      backgroundColor: '#313C4F'
    }
  },
  arrows: {
    color: '#75767A',
    '&:hover': {
      color: '#C6CACD'
    },
    '&:active': {
      color: '#C6CACD'
    }
  },
  textColor: {
    color: theme.palette.primary.light
  },
  socialLink: {
    color: '#fff',
    textTransform: 'none',
    padding: 0,
    transition: 'color 1s ease',
    '&:hover': {
      color: '#f1c355'
    },
  }
}))

const bg = require('../../../images/Photo-9.jpg?resize&size=600');

export const MobileSeven = () => {
  const classes = useStyle();
  const [index, setIndex] = useState(0);

  const onPrevClick = () => setIndex(index == 0 ? 0 : index -1);
  const onNextClick = () => setIndex(index == items.length - 1 ? index : index + 1);

  return (<>
    <div className={classes.line}>
      <Grid 
        container
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12} style={{
          marginBottom: 32
        }}>
          <Typography variant='h2' component='h1' align='center' gutterBottom style={{color: '#fff'}}>
            Отзывы
          </Typography>
        </Grid>
      </Grid> 
      <div className={classes.slideArea}
        style={{
          minWidth: `${items.length*100}vw`,
          left: `${index* -100}vw`,
        }}
      >
        {items.map((item, i) => (
          <div key={i} className={classes.slideItem}>
            <Review {...item} />
          </div>
        ))}
      </div>
      <div style={{position: 'absolute', right: 32, bottom: 112}}>
        <IconButton onClick={onPrevClick} classes={{root: classes.previewButton}}>
          <ChevronLeftRounded className={classes.arrows} />
        </IconButton>
        <IconButton onClick={onNextClick} classes={{root: classes.previewButton}} style={{marginLeft: 16}}>
          <ChevronRightRounded className={classes.arrows} />
        </IconButton>
      </div>
      <Grid container justify='center' alignItems='center' style={{paddingTop: 48}}>
        <Grid item>
          <Typography variant='body1' component='div' className={classes.textColor}>Наши отзывы в:</Typography>
        </Grid>
        <Grid item style={{marginLeft: 16}}>
            <Button href='https://vk.com/fulogygroup?w=app6326142_-124817525' className={classes.socialLink} style={{marginRight: 16}}>Вконтакте</Button>
            <Button href='https://www.instagram.com/stories/highlights/17988815101280873/' className={classes.socialLink}>Instagram</Button>
        </Grid>
      </Grid>
    </div>
  </>
  )
}