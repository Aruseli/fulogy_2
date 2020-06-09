import React, {useContext, useState} from 'react';

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
    marginRight: 16,
    position: 'absolute',
    top: 17,
    left: 0
  }
}))

export const kitchen = require('../../../images/Photo-8.jpg?resize&size=600');
export const kitchenLight = require('../../../images/Photo-7.jpg?resize&size=600');
export const kitchenDark = require('../../../images/Photo-6.jpg?resize&size=600');
export const tracking = require('../../../public/images/icon/tracking.svg');
export const smile = require('../../../public/images/icon/smile.svg');
export const support = require('../../../public/images/icon/support.svg');

export const MobileSix = () => {
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
        <Grid item>
          <Typography variant='h1' component='h1' gutterBottom align='center'>
            Просто сравните:
          </Typography>   
        </Grid>
        <Grid item xs={11} style={{marginTop: 48, position: 'relative'}}>
          <Circle style={{top: -29, left: 'calc(50% - 28px)', backgroundColor: '#202835'}}>
            <Typography variant='body1' component='h2' style={{color: '#fff', paddingLeft: 18, paddingTop: 15}}>До</Typography>
          </Circle>
          <img src={kitchenDark} alt='кухня до Fulogy' style={{width: '100%'}} />
        </Grid>
        <Grid item xs={11} style={{position: 'relative', marginTop: 64}}>
          <Circle style={{top: -29, left: 'calc(50% - 28px)', backgroundColor: '#f1c355'}}>
            <Typography variant='body1' component='h2' style={{color: '#202835', paddingLeft: 4, paddingTop: 16}}>После</Typography>
          </Circle>
          <img src={kitchenLight} alt='кухня c Fulogy' style={{width: '100%'}} />
        </Grid>
      </Grid>
      <div className={classes.line}>   
        <Grid
          container
          justify='center'
          alignItems='stretch'
        >
          <Grid item style={{padding: '32px 16px'}}>
            <Typography variant='body1' component='div' >
              Разница очевидна. Уже больше <span style={{color: '#000', fontWeight: 700}}>1500</span> клиентов сделали выбор в пользу современного и 
              удобного<br/>бесконтактного светодиодного светильника на своей кухне.
            </Typography>
          </Grid>
        </Grid>
      </div> 
      <Grid
        container
        justify='center'
        alignItems='stretch'
        style={{marginTop: 64}}
      >
        <Grid item xs={11}>
          <img src={kitchen} alt='освещение Fulogy' style={{width: '100%'}} />
        </Grid>
        <Grid item xs={11} style={{
          border: '1px solid #efefef',
          boxShadow: '0 15px 30px 0 rgba(0,0,0, 0.1)',
          boxSizing: 'border-box',
          padding: '32px 12px',
          marginTop: 64,
          marginBottom: 64
        }}>
          <Typography variant='h2' component='h1'>Закажите светильники Fulogy</Typography>
          <List>
            <ListItem disableGutters>
              <ListItemIcon>
                <img src={support} alt='клиентская поддержка Fulogy' className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={
                <Typography variant='body1' component='div'>
                  Наш менеджер перезвонит <span style={{color: '#000', fontWeight: 700}}>в течение 15 минут</span> и согласует время замера.
                </Typography>
              } style={{paddingLeft: 24}} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <img src={tracking} alt='клиентская поддержка Fulogy' className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={
                <Typography variant='body1' component='div'>
                  На замер наш мастер <span style={{color: '#000', fontWeight: 700}}>привезет с собой образец</span> светильника, 
                  который можно посмотреть и даже потрогать руками.
                </Typography>
              } style={{paddingLeft: 24}} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <img src={smile} alt='клиентская поддержка Fulogy' className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={
                <Typography variant='body1' component='div'>
                  А уже через <span style={{color: '#000', fontWeight: 700}}>72 часа</span> эти светильники сделают Вашу кухню 
                  светлее, а процесс приготовления пищи – ярче и приятнее!
                </Typography>
              } style={{paddingLeft: 24}} />
            </ListItem>
          </List>
          <div style={{paddingTop: 16, textAlign: 'center'}}>
            <ContainedButton onClick={onClickLight} style={{boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.2)'}} />
          </div>
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