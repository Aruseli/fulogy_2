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
  root: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%'
  },
  typographyBody1: {
    color: theme.palette.primary.light
  },
  cornerImage: {
    width: '55%',
    position: 'absolute',
    top: 0,
    right: 0,
  }
}))

export const bg = require('../../../images/Photo-1.jpg?resize&size=600');
export const desktopKit = require('../../../images/desktop-kit.png?resize&size=600');

export const DesktopOne = () => {
  const classes = useStyle();

  return (<div className={classes.root}>
    <Grid 
      container
      direction='column'
      justify='flex-start'
      alignItems='stretch'
      style={{
        paddingLeft: 32
      }}
    >
      <Grid item md={7} style={{marginBottom: 48}}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          style={{position: 'relative', zIndex: 11111}}
        >
          <Grid item md={2}>
            <Logo width='60%' />
          </Grid>
          <Grid item md={5}>
            <Light />
          </Grid>
          <Grid item md={2} />
          <Grid item md={3} style={{position: 'relative', left: 48, minWidth: 163}}>
            <Contacts icon={<img src={phone} alt='контакты fulogy' style={{width: 16}} />}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Typography variant='h1' component='h1'>ровный&ensp;<Typography variant='h1' component='span' color='secondary'>яркий</Typography>&ensp;свет</Typography>
        <Typography variant='h3' component='h2' style={{color: '#fff'}} gutterBottom>над рабочим столом по взмаху руки</Typography>
        <Typography variant='body1' component='p' paragraph className={classes.typographyBody1}>
          Бесконтактные светодиодные светильники Fulogy 
          зальют рабочую поверхность Вашей кухни мягким равномерным светом. Просто 
          &ensp;<Typography variant='body1' component='span' color='secondary'>проведите рукой</Typography>&ensp;под датчиком!
        </Typography> 
        <Typography variant='body1' component='p' gutterBottom className={classes.typographyBody1}>
          Готовьте с удовольствием, не щуря глаз, благодаря 
          &ensp;<Typography variant='body1' component='span' color='secondary'>идеальной цветопередаче</Typography>&ensp;
          (CRI>98) и стабильному свету без пульсаций. А уникальный слитный дизайн, позволяющий установить светильники с точностью до
          &ensp;<Typography variant='body1' component='span' color='secondary'>миллиметра</Typography>&ensp;
          и без швов между ними, подчеркнет индивидуальность Вашей кухни.
        </Typography> 
        <div style={{marginBottom: 80}}>
          <ContainedButton />
          <TextButton style={{marginLeft: 32}}/>
        </div>
      </Grid>
    </Grid>
    <div className={classes.cornerImage}>
      <img src={desktopKit} alt='fulogy' style={{width: '100%'}} />
      <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '52%', left: 0}}>Бесшовный дизайн</Typography>
      <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '75%', left: '11%'}}>Точно в размер Вашей кухни</Typography>
      <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '94.5%', left: '32.5%'}}>Установим через 72 часа</Typography>
    </div>
  </div>)
}