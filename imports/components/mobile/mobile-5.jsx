import React from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import {ShadowBlock} from '../../widgets/block-with-box-shadow';

const useStyle = makeStyles((theme) => ({
  backgroundBlock: {
    position: 'relative',
    backgroundImage: `url(${kitchen})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    marginTop: 64,
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
export const kitchen = require('../../../images/Photo-5.jpg?resize&size=600');

export const MobileFive = () => {
  const classes = useStyle();

  return (<div style={{overflow: 'hidden'}}>
    <div className={classes.backgroundBlock}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{padding: '64px 0'}}
        >
        <Grid item xs={12}>
          <Typography variant='h2' component='h1' gutterBottom align='center' style={{color: '#fff', padding: '0 32px'}}>
            Сколько стоит бесконтактный светодиодный светильник
          </Typography>  
          <Typography variant='body1' component='div' align='center' style={{color: '#b4b4b4', padding: '0 32px'}}>
            Стоимость погонного метра светильника Fulogy составляет <span style={{color: '#f1c355'}}>2000&nbsp;руб.</span>
          </Typography>  
        </Grid>
        <Grid item xs={12} style={{paddingTop: 48}}>
          <Grid 
            container
            justify='center'
            alignItems='center'
          >
            <Grid item xs={10}>
              <ShadowBlock style={{boxShadow: '15px -15px 0 0 #303c4f'}}>
                <Typography variant='h3' component='h2' style={{color: '#fff', padding: '32px 32px 0'}}>
                  В цену входит:
                </Typography>
                <List style={{paddingLeft: 16}}>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        <span style={{color: '#f1c355'}}>Светодиодные светильники,</span> произведенные именно для Вашей кухни
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        <span style={{color: '#f1c355'}}>Блок питания</span> (не свистит, не жужжит)
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        <span style={{color: '#f1c355'}}>Сенсор управления светом</span> (очень удобный, технологичный и стильный)
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        <span style={{color: '#f1c355'}}>Доставка</span> по Москве и Московской области
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        <span style={{color: '#f1c355'}}>Демонтаж</span> старых светильников
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        <span style={{color: '#f1c355'}}>Монтаж</span> светильников Fulogy
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Гарантия <span style={{color: '#f1c355'}}>5 лет</span>
                      </Typography>
                    } />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={
                      <Typography variant='body1' component='div' className={classes.textColor}>
                        Срок службы больше <span style={{color: '#f1c355'}}>10 лет</span> без изменения характеристик освещения
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
    <div className={classes.line}>   
      <Grid
        container
        justify='center'
        alignItems='stretch'
      >
        <Grid item style={{padding: '32px 16px'}}>
          <Typography variant='body1' component='div' style={{color: '#b4b4b4'}}>
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