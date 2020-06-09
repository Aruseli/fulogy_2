import React from 'react';
import { useSpring, animated as a, interpolate } from 'react-spring';

import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import {ShadowBlock} from '../../widgets/block-with-box-shadow';
import { FiberManualRecord } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  backgroundBlock: {
    position: 'relative',
    backgroundImage: `url(${kitchen})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
  line: {
    position: 'relative',
    backgroundImage: `url(${bgLine})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  textColor: {
    color: theme.palette.primary.light
  },
  shadowHover: {
    color: '#b4b4b4',
    '&:hover': {
      '& svg:nth-child(1n)': {
        color: theme.palette.secondary.main,
        filter: 'drop-shadow(0 0 2px #f1c355)'
      },
      '& div > div:nth-child(1n)': {
        color: theme.palette.secondary.main,
      },
    }
  },
  svgShadow: {
    width: 7,
    color: '#555354',
  }
}))

export const bgLine = require('../../../images/dark-blue.jpg?resize&size=600');
export const letter = require('../../../images/fulogy.png?resize&size=600');
export const kitchen = require('../../../images/Photo-5.jpg?resize&size=600');

export const DesktopFive = () => {
  const classes = useStyle();
  const [props, setSpring] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 350, friction: 40 } }));

  const itemTrans = (x, y) => `translate(${x-50}px,${y-50}px)`;

  return (<div style={{overflow: 'hidden'}}>
    <div className={classes.backgroundBlock}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{padding: '64px 0'}}
        >
        <Grid item md={12}>
          <Typography variant='h2' component='h1' gutterBottom align='center' style={{color: '#fff'}}>
            Сколько стоит бесконтактный светодиодный светильник
          </Typography>  
          <Typography variant='body1' component='div' gutterBottom align='center' style={{color: '#b4b4b4'}}>
            Стоимость погонного метра светильника Fulogy составляет <span style={{color: '#f1c355'}}>2000 руб.</span>
          </Typography>  
        </Grid>
        <Grid item md={12} style={{paddingTop: 48}}>
          <Grid 
            container
            justify='center'
            alignItems='center'
          >
            <Grid item md={7}>
              <ShadowBlock style={{boxShadow: '30px -30px 0 0 #303c4f'}}>
                <Typography variant='h3' component='h2' style={{color: '#fff', padding: '32px 32px 0'}}>
                  В цену входит:
                </Typography>
                <List style={{paddingLeft: 16}}>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Светодиодные светильники, произведенные именно для Вашей кухни
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Блок питания (не свистит, не жужжит)
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Сенсор управления светом (очень удобный, технологичный и стильный)
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Доставка по Москве и Московской области
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Демонтаж старых светильников
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Монтаж светильников Fulogy
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Гарантия 5 лет
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem className={classes.shadowHover}>
                    <ListItemIcon>
                      <FiberManualRecord className={classes.svgShadow} />
                    </ListItemIcon>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Срок службы больше 10 лет без изменения характеристик освещения
                      </Typography>
                    } />
                  </ListItem>
                </List>
              </ShadowBlock>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
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
        }}
      />
      <img src={letter} style={{width: '46%', position: 'absolute', top: 0, left: 0}} />
      <Grid
        container
        justify='center'
        alignItems='stretch'
        style={{position: 'relative'}}
      >
        <Grid item style={{padding: '32px 0'}}>
          <Typography variant='body1' component='div' align='center' style={{color: '#b4b4b4'}}>
            И, конечно,<br />безупречное освещение рабочей зоны, недостижимое 
            при использовании любых других<br />светодиодных или люминесцентных 
            ламп, а также шикарный дизайн, придающий Вашей кухне<br />
            <span style={{color: '#f1c355'}}>законченный и современный вид.</span>
          </Typography>
        </Grid>
      </Grid>
    </div>  
  </div>
  )
}