import React from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';

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
    }
  }
}))

const bg = require('../../../images/Photo-9.jpg?resize&size=600');

export const DesktopSeven = () => {
  const classes = useStyle();

  return (<>
    <div className={classes.line}>
      <Grid 
        container
        justify='center'
        alignItems='center'
        style={{
          padding: '48px 0'
        }}
      >
        <Grid item md={12} style={{
          padding: '32px 0'
        }}>
          <Typography variant='h2' component='h1' align='center' gutterBottom style={{color: '#fff'}}>
            Отзывы
          </Typography>
        </Grid>
        <Grid 
          container
          justify='center'
          alignItems='stretch'
          style={{
            padding: '32px 0'
          }}
        >
          {items.map((item,i) => (
            <Grid item md={3} key={i} style={{margin: '0 16px'}}>
              <Review {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid> 
      <Grid container justify='flex-end' alignItems='stretch' style={{paddingRight: 32, paddingBottom: 32}}>
        <Grid item>
          <Typography variant='body1' component='div' className={classes.textColor}>Наши отзывы в:</Typography>
        </Grid>
        <Grid item style={{marginLeft: 16}}>
          <div>
            <Button href='https://vk.com/fulogygroup?w=app6326142_-124817525' className={classes.socialLink}>Вконтакте</Button>
          </div>
          <div>
            <Button href='https://www.instagram.com/stories/highlights/17988815101280873/' className={classes.socialLink}>Instagram</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  </>
  )
}