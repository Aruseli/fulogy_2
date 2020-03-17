import React, {useState, useContext} from 'react';
import { useSpring, animated as a, interpolate } from 'react-spring';

import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import {
  ContainedButton
} from '../../widgets/small-elements';
import {AlwaysOpen} from '../../widgets/opened-block';
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
    paddingTop: 8,
    fontSize: 16
  },
  textColor: {
    color: theme.palette.primary.light
  }
}))

export const bgLine = require('../../../images/Photo-3.jpg?resize&size=600');
export const letter = require('../../../images/fulogy.png?resize&size=600');
const vawe = require('../../../public/images/icon/vawe-big.svg');

export const DesktopThree = () => {
  const classes = useStyle();
  const [props, setSpring] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 350, friction: 40 } }));
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  
  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest3');
  }

  const itemTrans = (x, y) => `translate(${x-50}px,${y-50}px)`;

  return (<>
    <div className={classes.line} 
     onMouseMove={({ currentTarget, pageX: x, pageY: y }) => {
      setSpring({ xy: [x, y - currentTarget.offsetTop] });
    }}
    >
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
          top: 0, left: 0,
        }}
      />
      <img src={letter} style={{width: '46%', position: 'absolute', top: 0, left: 0}} />
      <Grid 
        container
        justify='center'
        alignItems='stretch'
        style={{
          padding: '32px 0',
          position: 'relative'
        }}
      >
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>10 000+</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>cветильников Fulogy<br />куплено</Typography>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>20 <span style={{fontSize: 32, color: '#f1c355'}}>км</span></Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>столешниц освещено</Typography>
          </div>
        </Grid> 
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>1500+</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>хозяек радуются<br />новому удобству</Typography>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>8</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>лет на рынке</Typography>
          </div>
        </Grid>
      </Grid>     
    </div>
    <Grid
      container
      justify='center'
      alignItems='center'
      style={{
        marginTop: 64,
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${vawe})`,
        backgroundPosition: 'bottom',
        backgroundSize: '100%',
      }}>
      <Grid item md={12} id='pageLink'>
        <Typography variant='h2' component='h1' gutterBottom align='center'>
          Как работает бесконтактный светильник Fulogy
        </Typography>
        <Typography variant='body1' component='div' gutterBottom align='center'>
          Вы проводите рукой у датчика, светильник включается. Проводите еще 
          раз – выключается.<br />Это действительно настолько просто! Смотрите:
        </Typography>   
      </Grid>
      <Grid item style={{
        textAlign: 'center',
        width: 'calc((100vw * 1) * 0.5)',
        height: 'calc((100vw * 0.56) * 0.5)'    
      }}>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/AgkaT02Z8PI" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </Grid>
      <Grid item md={12} style={{paddingTop: 64, paddingLeft: 16, paddingRight: 16}}>
        <Grid 
          container
          justify='center'
          alignItems='stretch'
        >
          <Grid item md={4}>
            <AlwaysOpen style={{margin: '0 16px'}}>
              <>
                <Typography variant='h3' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
                  Удобно
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  Традиционный выключатель не видно<br />под шкафом, его 
                  нужно нащупывать.<br />Часто – грязными от продуктов руками.
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  Бесконтактный датчик чувствителен<br />ровно настолько, 
                  чтобы реагировать<br />на <span style={{color: '#fff'}}>движение рукой</span> рядом с ним.
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  И никаких больше отпечатков пальцев<br />на лампе!
                </Typography>
              </>
            </AlwaysOpen>
          </Grid>
          <Grid item md={4}>
            <AlwaysOpen style={{margin: '0 16px'}}>
              <>
                <Typography variant='h3' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
                  Надежно
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  Датчик в светильнике протестирован<br />циклом из десятков тысяч<br />включений/выключений, 
                  Это примерно<br /><span style={{color: '#f1c355'}}>5 лет</span> эксплуатации.
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  Он не реагирует на приборы, тепло,<br />пульты и случайные движения.
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  И безупречно реагирует на жесты,<br />включая и выключая свет над столешницей.
                </Typography>
              </>
            </AlwaysOpen>
          </Grid>
          <Grid item md={4}>
            <AlwaysOpen style={{margin: '0 16px'}}>
              <>
                <Typography variant='h3' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
                  Стильно
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  Датчик <span style={{color: '#f1c355'}}>полностью скрыт</span> в корпусе<br />светильника и не выделяется ничем,<br />кроме 
                  стильной декоративной подсветки.
                </Typography>
                <Typography variant='body1' component='p' paragraph className={classes.textColor}>
                  А сам алюминиевый корпус светильника<br />смотрится лаконично и лишь подчеркивает<br />
                  дизайн Вашего кухонного гарнитура.
                </Typography>
              </>
            </AlwaysOpen>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{marginTop: 64, marginBottom: 32}}>
        <ContainedButton onClick={onClickLight} />
      </Grid>
    </Grid>
    <FormDialog
      open={dialogOpenLight}
      onClose={() => setDialogOpenLight(!dialogOpenLight)}
      title='Чтобы заказать светильники'
      button='Заказать светильники'
      onSubmit={() => trigger('lightThanks3')}
    />
  </>
  )
}