import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import {Circle} from '../../widgets/circle';
import {ContainedButton} from '../../widgets/small-elements';
import {FormDialog} from '../../widgets/formDialog';

import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.primary.light
  },
  line: {
    backgroundColor: '#f8f8f8'
  },
  icon: {
    width: 27,
    marginRight: 16
  }
}))

export const kitchen = require('../../../images/Photo-8.jpg?resize&size=600');
export const kitchenLight = require('../../../images/Photo-7.jpg?resize&size=600');
export const kitchenDark = require('../../../images/Photo-6.jpg?resize&size=600');
export const tracking = require('../../../public/images/icon/tracking.svg');
export const smile = require('../../../public/images/icon/smile.svg');
export const support = require('../../../public/images/icon/support.svg');
const vawe = require('../../../public/images/icon/vawe.svg');

export const DesktopSix = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  
  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest6');
  }

  return (<div style={{overflow: 'hidden', marginTop: 32}}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{padding: '64px 0'}}
        >
        <Grid item md={12}>
          <Typography variant='h3' component='h1' gutterBottom align='center'>
            Просто сравните:
          </Typography>   
        </Grid>
        <Grid item md={12} style={{paddingTop: 48}}>
          <Grid 
            container
            justify='center'
            alignItems='center'
          >
            <Grid item md={4} style={{position: 'relative', marginRight: 48, boxSizing: 'border-box'}}>
              <Circle style={{top: -25, right: -25, backgroundColor: '#202835'}}>
                <Typography variant='body1' component='h2' style={{color: '#fff', paddingLeft: 18, paddingTop: 15}}>До</Typography>
              </Circle>
              <img src={kitchenDark} alt='кухня до Fulogy' style={{width: '100%'}} />
            </Grid>
            <Grid item md={4} style={{position: 'relative'}}>
              <Circle style={{top: -25, right: -25, backgroundColor: '#f1c355'}}>
                <Typography variant='body1' component='h2' style={{color: '#202835', paddingLeft: 4, paddingTop: 16}}>После</Typography>
              </Circle>
              <img src={kitchenLight} alt='кухня c Fulogy' style={{width: '100%'}} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.line}>   
        <Grid
          container
          justify='center'
          alignItems='stretch'
        >
          <Grid item style={{padding: '32px 0'}}>
            <Typography variant='body1' component='div' align='center' style={{color: '#b4b4b4'}}>
              Разница очевидна. Уже больше <span style={{color: '#000'}}>1500</span> клиентов сделали выбор в пользу современного и 
              удобного<br/>бесконтактного светодиодного светильника на своей кухне.
            </Typography>
          </Grid>
        </Grid>
      </div> 
      <Grid
        container
        justify='center'
        alignItems='stretch'
        style={{
          marginTop: 64,
          position: 'relative',
          paddingBottom: 112
        }}
      >
        <Grid item md={7} style={{
          border: '1px solid #efefef',
          boxShadow: '0 15px 30px 0 rgba(0,0,0, 0.1)',
          boxSizing: 'border-box',
          padding: 32,
          backgroundColor: '#fff',
          zIndex: 111
        }}>
          <Typography variant='h2' component='h1'>Закажите светильники Fulogy</Typography>
          <Grid
            container
            justify='center'
            alignItems='center'
          >
            <Grid item md={8} style={{paddingRight: 24}}>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <img src={support} alt='клиентская поддержка Fulogy' className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={
                    <Typography variant='body1' component='div'>
                      Наш менеджер перезвонит в течение 15 минут и согласует время замера.
                    </Typography>
                  } />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <img src={tracking} alt='клиентская поддержка Fulogy' className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={
                    <Typography variant='body1' component='div'>
                      На замер наш мастер привезет с собой образец светильника, 
                      который можно посмотреть и даже потрогать руками.
                    </Typography>
                  } />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <img src={smile} alt='клиентская поддержка Fulogy' className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={
                    <Typography variant='body1' component='div'>
                      А уже через 72 часа эти светильники сделают Вашу кухню 
                      светлее, а процесс приготовления пищи – ярче и приятнее!
                    </Typography>
                  } />
                </ListItem>
              </List>
              <div style={{padding: '16px 0'}}>
                <ContainedButton onClick={onClickLight} />
              </div>
            </Grid>
            <Grid item md={4}>
              <img src={kitchen} alt='освещение Fulogy' style={{width: '100%'}} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{position: 'absolute', bottom: 0, left: 0}}>
          <img src={vawe} style={{width: '100%'}} />
        </Grid>
      </Grid> 
      <FormDialog
        open={dialogOpenLight}
        onClose={() => setDialogOpenLight(!dialogOpenLight)}
        title='Чтобы заказать светильники'
        button='Заказать светильники'
        onSubmit={() => trigger('lightThanks6')}
      />
    </div>
  )
}