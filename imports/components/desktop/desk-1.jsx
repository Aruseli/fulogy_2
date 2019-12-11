import React, { useState, useContext } from 'react';
import { useSpring, animated as a, interpolate } from 'react-spring';

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
import {FormDialog} from '../../widgets/formDialog';

import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%'
  },
  logoStyle: {
    width: 100,
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
export const letter = require('../../../images/fulogy.png?resize&size=600');
export const desktopKit = require('../../../images/desktop-kit.png?resize&size=600');

export const DesktopOne = () => {
  const classes = useStyle();
  const [props, setSpring] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 350, friction: 40 } }));
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenLight, setDialogOpenLight] = useState(true);

  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest1');
  }

  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequest1');
  }

  const itemTrans = (x, y) => `translate(${x-50}px,${y-50}px)`;

  return (<div className={classes.root} onMouseMove={({ clientX: x, clientY: y }) => setSpring({ xy: [x, y] })}>
    <a.div
      style={{
        backgroundColor: 'rgba(255,255,255, 0.1)',
        borderRadius: '50%',
        boxShadow: '0 0 15px 30px rgba(255,255,255, 0.1)',
        opacity: 0.5,
        width: 100,
        height: 100,
        transform: props.xy.interpolate(itemTrans),
        position: 'absolute',
      }}
    >
      
    </a.div>
    <img src={letter} style={{width: '63%', position: 'absolute', top: 48, left: 0}} />
    <Grid 
      container
      direction='column'
      justify='space-between'
      alignItems='stretch'
      style={{
        paddingLeft: 32,
        minHeight: '46vw',
        position: 'relative'
      }}
    >
      <Grid item md={7} style={{marginBottom: 48}}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          style={{position: 'relative', zIndex: 11111}}
        >
          <Grid item >
            <Logo className={classes.logoStyle} />
          </Grid>
          <Grid item >
            <Light />
          </Grid>
          <Grid item />
          <Grid item  style={{position: 'relative', left: 48, minWidth: 163}}>
            <Contacts onClick={onClickCall} icon={<img src={phone} alt='контакты fulogy' style={{width: 16}} />}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5}>
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
          <ContainedButton onClick={onClickLight} />
          <TextButton style={{marginLeft: 16}} href='#pageLink'>
              Узнать больше
          </TextButton>
        </div>
      </Grid>
    </Grid>
    <div className={classes.cornerImage}>
      <img src={desktopKit} alt='fulogy' style={{width: '100%'}} />
      <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '52%', left: 0}}>Бесшовный дизайн</Typography>
      <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '75%', left: '11%'}}>Точно в размер Вашей кухни</Typography>
      <Typography variant='h4' component='div' color='primary.light' style={{position: 'absolute', top: '94.5%', left: '32.5%'}}>Установим через 72 часа</Typography>
    </div>
    <FormDialog
      open={dialogOpenLight}
      onClose={() => setDialogOpenLight(!dialogOpenLight)}
      title='Чтобы заказать светильники'
      button='Заказать светильники'
      onSubmit={() => trigger('lightThanks1')}
    />
    <FormDialog
      open={dialogOpenCall}
      onClose={() => setDialogOpenCall(!dialogOpenCall)}
      title='Чтобы заказать звонок'
      button='Заказать звонок'
      onSubmit={() => trigger('callThanks1')}
    />
  </div>
  )
}