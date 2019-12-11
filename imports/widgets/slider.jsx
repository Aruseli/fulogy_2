import React, {useState} from 'react';

import { makeStyles, Grid } from '@material-ui/core';

import {ChildrenResponsive} from './children-responsive';
import { IconButton, Typography } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded, Translate } from '@material-ui/icons';


const useStyle = makeStyles((theme) => ({
  root: {
    margin: '32px 0',
    padding: '0 200px',
    overflow: 'hidden',
  },
  items: {
    transition: 'all 1s ease'
  }
}))

const items = [
  {
    src: require('../../images/1-1.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-2.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-3.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-4.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-5.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-6.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-7.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1-8.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  },
  {
    src: require('../../images/1.jpg'),
    alt: 'освещение кухонной рабочей зоны от Fulogy'
  }
]

export const Slider = () => {
  const classes = useStyle();
  const[index, setIndex] = useState(4);

  // const onPrevClick = () => {
  //   setIndex(index > 0 ? index - 1 : 0);
  // };

  // const onNextClick = () => {
  //   setIndex(index == items.length - 1 ? index : index + 1)
  // };

  const onPrevClick = () => {
    setIndex(index>0 ? index - 1 : items.length - 1);
  };

  const onNextClick = () => {
    setIndex(items.length - 1 == index ? 0 : index + 1);
  };

  return(<>
    <Grid container justify='center' alignItems='stretch' className={classes.root}>
      <Grid item md={6}><Typography variant='h2' component='h1' gutterBottom align='center'>Галерея</Typography></Grid>
      <Grid item md={7} style={{position: 'relative', height: '40vw'}}>
        {items.map((item, i) => (
          <div key={i} className={classes.items}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              transform: `translateX(${(i - index)*20}%) scale(${(items.length - (i - index < 0 ? index - i : i - index))/10})`,
              zIndex: items.length - (i - index < 0 ? index - i : i - index),
              filter: `opacity(${(items.length - (i - index < 0 ? index - i : i - index))*11}%)`,
            }}>
            <ChildrenResponsive>
              <img src={item.src} alt={item.alt} style={{width: '100%'}} />
            </ChildrenResponsive>
          </div>
          ))}
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center'>
        <Grid item>
          <IconButton onClick={onPrevClick}>
            <ChevronLeftRounded />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={onNextClick}>
            <ChevronRightRounded />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
