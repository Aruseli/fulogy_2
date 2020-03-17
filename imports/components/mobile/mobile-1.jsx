import React, {useContext, useState} from 'react';

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
  OutlinedButton,
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
    width: '100%',
    height: '100vh',
    maxHeight: '160vw',
    overflow: 'hidden'
  },
  logoStyle: {
    width: 150,
    '@media(max-width: 340px)': {
      width: 100
    }
  },
  typographyBody1: {
    color: theme.palette.primary.light
  },
  cornerImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    '@media (min-width: 500px)': {
      top: 'calc(-100vw - -500px)',
    },
  }
}))

export const bg = require('../../../images/Photo-1.jpg?resize&size=600');
export const mobileKit = require('../../../images/mobile-kit.png?resize&size=600');

export const MobileOne = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);

  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest1');
    console.log({trigger});
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequest1');
    console.log({trigger});
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.cornerImage}>
          <img src={mobileKit} alt='fulogy' style={{width: '100%', transform: 'scale(1.1)'}} />
            <Typography variant='h4' component='div' style={{position: 'absolute', top: '80%', color: '#fff', left: '4%'}}>Бесшовный<br />дизайн</Typography>
            <Typography variant='h4' component='div' style={{position: 'absolute', top: '93%', color: '#fff', left: '15%'}}>Точно в размер<br />Вашей кухни</Typography>
            <Typography variant='h4' component='div' style={{position: 'absolute', top: '102%', color: '#fff', left: '46%'}}>Установим через<br /><span style={{color: '#f1c355'}}>72</span> часа</Typography>
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
            paddingTop: 8,
            paddingLeft: 16,
            paddingRight: 16
          }}
        >
          <Grid item>
            <Logo className={classes.logoStyle} />
          </Grid>
          <Grid item>
            <Contacts onClick={onClickCall} />
          </Grid>
          <Grid item xs={12} style={{marginTop: 40}}>
            <Light />
          </Grid>
          <Grid item xs={12} style={{marginTop: 24}}>
            <Typography variant='h1' component='h1' style={{color: '#fff'}} align='center'>ровный&ensp;<Typography variant='h1' component='span' color='secondary'>яркий</Typography>&ensp;свет</Typography>
            <Typography variant='h3' component='h2' style={{color: '#fff', marginTop: 8}} align='center'>над рабочим столом по<br />взмаху руки</Typography>
          </Grid>
        </Grid>
        <div style={{position: 'absolute', bottom: 24, left: 16}}>
          <ContainedButton onClick={onClickLight} />
          <TextButton style={{marginLeft: 32}} href='#pageLinkMob'>Узнать больше</TextButton>
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
    </>
  )
}