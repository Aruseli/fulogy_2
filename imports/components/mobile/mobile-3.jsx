import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core';

import {
  ContainedButton
} from '../../widgets/small-elements';
import {OpenedBlock} from '../../widgets/opened-block';
import {FormDialog} from '../../widgets/formDialog';

import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  line: {
    position: 'relative',
    backgroundImage: `url(${bgLine})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  shadowedFont: {
    color: theme.palette.secondary.main,
    textShadow: '0 1px 26px rgba(241, 195, 85, 0.7)',
    fontSize: 32
  },
  subtitleFonts: {
    color: '#fff',
    paddingTop: 8
  },
  textColor: {
    color: theme.palette.primary.light
  }
}))

export const bgLine = require('../../../images/Photo-3.jpg?resize&size=600');
const kitchen = require('../../../images/kitchen.jpg?resize&size=600');
export const desktopWoman = require('../../../images/desktop-kit.png?resize&size=600');

export const MobileThree = () => {
  const classes = useStyle();

  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  
  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest3');
  }

  return (<div style={{overflow: 'hidden'}}>
    <img src={kitchen} alt='освещение рабочей зоны кухни от Fulogy' style={{marginTop: 32, width: '100%'}} />
    <div className={classes.line}>
      <Grid 
        container
        direction='column'
        justify='center'
        alignItems='center'
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
            <Typography variant='body1' component='p' align='center' gutterBottom className={classes.subtitleFonts}>лет на рынке</Typography>
          </div>
        </Grid>
      </Grid>     
    </div>
    <div style={{marginTop: 64}} id='pageLinkMob'>
      <Typography variant='h1' component='h1' gutterBottom align='center'>
        Как работает<br />бесконтактный<br />светильник Fulogy
      </Typography>
      <Typography variant='body1' component='div' align='center'>
        Вы проводите рукой у датчика, светильник включается. Проводите еще 
        раз – выключается. Это действительно настолько просто!<br />Смотрите:
      </Typography> 
      <div style={{
        margin: '48px auto',
        width: 'calc((100vw * 1) - 32px)',
        height: 'calc(100vw * 0.56)'
      }}>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/AgkaT02Z8PI" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
    <Container>
      <OpenedBlock style={{marginTop: 48}} title='Удобно' defaultOpen={true}>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
            Удобно
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            Традиционный выключатель не видно под шкафом, его 
            нужно нащупывать. Часто – грязными от продуктов руками.
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            Бесконтактный датчик чувствителен ровно настолько, 
            чтобы реагировать на <span style={{color: '#fff'}}>движение рукой</span> рядом с ним.
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            И никаких больше отпечатков пальцев на лампе!
          </Typography>
        </>
      </OpenedBlock>
      <OpenedBlock style={{marginTop: 32}} title='Надежно'>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
            Надежно
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            Датчик в светильнике протестирован циклом из десятков тысяч включений/выключений, 
            Это примерно <span style={{color: '#f1c355'}}>5 лет</span> эксплуатации.
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            Он не реагирует на приборы, тепло, пульты и случайные движения.
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            И безупречно реагирует на жесты, включая и выключая свет над столешницей.
          </Typography>
        </>
      </OpenedBlock>
      <OpenedBlock style={{marginTop: 32}} title='Стильно'>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
            Стильно
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            Датчик <span style={{color: '#f1c355'}}>полностью скрыт</span> в корпусе светильника 
            и не выделяется ничем, кроме стильной декоративной подсветки.
          </Typography>
          <Typography variant='body1' component='p' paragraph className={classes.textColor}>
            А сам алюминиевый корпус светильника смотрится лаконично и лишь подчеркивает 
            дизайн Вашего кухонного гарнитура.
          </Typography>
        </>
      </OpenedBlock>
    </Container>
    <div style={{marginTop: 64, textAlign: 'center', paddingBottom: 64}}>
      <ContainedButton onClick={onClickLight} style={{boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.2)'}} />
    </div>
    <FormDialog
      open={dialogOpenLight}
      onClose={() => setDialogOpenLight(!dialogOpenLight)}
      title='Чтобы заказать светильники'
      button='Заказать светильники'
      onSubmit={() => trigger('lightThanks3')}
    />
  </div>
  )
}