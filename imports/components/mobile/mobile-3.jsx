import React from 'react';

import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import {
  Logo,
  Light,
  Contacts,
  phone,
  ContainedButton,
  TextButton
} from '../../widgets/small-elements';

const useStyle = makeStyles((theme) => ({
  line: {
    position: 'relative',
    backgroundImage: `url(${bgLine})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  shadowedFont: {
    color: theme.palette.secondary.main,
    textShadow: '0 1px 26px rgba(241, 195, 85, 0.7)',
  },
  subtitleFonts: {
    color: '#fff',
    paddingTop: 8
  },
}))

export const bgLine = require('../../../images/Photo-3.jpg?resize&size=600');

export const desktopWoman = require('../../../images/desktop-kit.png?resize&size=600');

export const MobileThree = () => {
  const classes = useStyle();

  return (<>
    <img />
    <div className={classes.line}>
      <Grid 
        container
        justify='center'
        alignItems='stretch'
        spacing={8}
        style={{
          padding: '32px 0'
        }}
      >
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>10 000+</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>cветильников Fulogy<br />куплено</Typography>
          </div>
        </Grid>
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>20 км</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>столешниц освещено</Typography>
          </div>
        </Grid> 
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>1500+</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>хозяек радуются<br />новому удобству</Typography>
          </div>
        </Grid>
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>8</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>лет на рынке</Typography>
          </div>
        </Grid>
      </Grid>     
    </div>
  </>
  )
}