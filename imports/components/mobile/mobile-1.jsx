import React from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Container
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
    width: '100%',
    height: '100vh',
    maxHeight: '160vw'
  },
  typographyBody1: {
    color: theme.palette.primary.light
  },
  cornerImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  }
}))

export const bg = require('../../../images/Photo-1.jpg?resize&size=600');
export const mobileKit = require('../../../images/mobile-kit.png?resize&size=600');

export const MobileOne = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.cornerImage}>
          <img src={mobileKit} alt='fulogy' style={{width: '100%'}} />
            <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '74%', left: '4%'}}>Бесшовный<br />дизайн</Typography>
            <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '87%', left: '16%'}}>Точно в размер<br />Вашей кухни</Typography>
            <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '98%', left: '46%'}}>Установим через<br />72 часа</Typography>
        </div>
        <Grid 
          container
          justify='space-between'
          alignItems='center'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            paddingTop: 16
          }}
        >
          <Grid item>
            <Logo width='150' />
          </Grid>
          <Grid item>
            <Contacts icon={<img src={phone} alt='контакты fulogy' style={{width: 16}} />} style={{position: 'relative', left: 48}}/>
          </Grid>
          <Grid item xs={12} style={{marginTop: 60}}>
            <Light />
          </Grid>
          <Grid item xs={12} style={{marginTop: 32}}>
            <Typography variant='h1' component='h1' style={{color: '#fff'}} align='center'>ровный&ensp;<Typography variant='h1' component='span' color='secondary'>яркий</Typography>&ensp;свет</Typography>
            <Typography variant='h3' component='h2' style={{color: '#fff', marginTop: 8}} align='center'>над рабочим столом по<br />взмаху руки</Typography>
          </Grid>
        </Grid>
        <div style={{position: 'absolute', bottom: 24, left: 16}}>
          <ContainedButton />
          <TextButton style={{marginLeft: 32}}/>
        </div>
      </div>
      <Container style={{
        paddingTop: 42,
        paddingBottom: 42,
        backgroundColor: '#f8f8f8'
        }}>
        <Typography variant='body1' component='p' paragraph>
          Бесконтактные светодиодные светильники Fulogy зальют рабочую поверхность 
          Вашей кухни мягким равномерным светом. Просто проведите рукой под датчиком!
        </Typography>
        <Typography variant='body1' component='p'>
          Готовьте с удовольствием, не щуря глаз, благодаря идеальной цветопередаче 
          (CRI>98) и стабильному свету без пульсаций. А уникальный слитный дизайн, 
          позволяющий установить светильники с точностью до миллиметра и без швов между ними, подчеркнет индивидуальность Вашей кухни.
        </Typography>
      </Container>
    </>
  )
}