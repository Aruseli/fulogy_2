import React from 'react';

import {
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Logo } from '../../widgets/small-elements';

const useStyle = makeStyles((theme) => ({
  socialButton: {
    color: '#b4b4b4',
    transition: 'color 1s ease',
    '&:hover': {
      color: 'f1c355'
    }
  },
  textColor: {
    color: theme.palette.primary.light
  },
  icon: {
    width: 30, 
    marginRight: 16
  }
}))

const phone = require('../../../public/images/icon/call-with-shadow.svg');
const mail = require('../../../public/images/icon/mail-with-shadow.svg');
const check = require('../../../public/images/icon/check-with-shadow.svg');

export const FooterMobile = () => {
  const classes = useStyle(); 

  return(<Grid container justify='center' alignItems='center' style={{backgroundColor: '#202835', padding: '64px 0'}}>
      <Grid item xs={11} style={{textAlign: 'center'}}>
        <Logo width='150px'/>
      </Grid>
      <Grid item xs={11} style={{marginTop: 32}}>
        <Button variant="text" startIcon={
          <img src={phone} alt='позвонить в Fulogy' className={classes.icon} />
          }
          href='tel: 8(800) 505 65 33'>
          8 800 505-65-33
        </Button>
        </Grid>
        <Grid item xs={11}>
          <Button variant="text" startIcon={
            <img src={mail} alt='напишите в Fulogy' className={classes.icon} />
            }
            style={{textTransform: 'none', paddingBottom: 0}}
            href='mailto: info@fulogy.com'>
            info@fulogy.com
          </Button>
        </Grid>
        <Grid item xs={11}> 
        <List>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <img src={check} alt='адрес Fulogy' style={{width: 30, position: 'absolute', top: 10, left: 0}} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', paddingLeft: 22}}>
                141544, МО,<br />Пятницкое шоссе, 2, Юрлово
              </Typography>
            } />
          </ListItem>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <img src={check} alt='адрес Fulogy' style={{width: 30, position: 'absolute', top: 10, left: 0}} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', paddingLeft: 22}}>
                г. Калининград, ул. Пограничная, 766
              </Typography>
            } />
          </ListItem>
        </List>
      </Grid>
      <Grid container justify='center' alignItems='center' style={{marginTop: 32, textAlign: 'center'}}>
        <Grid item xs={4}>
          <Button variant='text' href='https://plus.google.com/118436112847149375359' target='_blank' className={classes.socialButton}>Google+</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='text' href='https://www.facebook.com/fulogy/' target='_blank' className={classes.socialButton}>Facebook</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='text' href='https://www.instagram.com/fulogy.ru/' target='_blank' className={classes.socialButton}>Instagram</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='text' href='https://vk.com/public124817525' target='_blank' className={classes.socialButton}>Vk</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='text' href='https://www.youtube.com/channel/UC3VvssJI1Lw1Uf--3P6I2Nw' target='_blank' className={classes.socialButton}>Youtube</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='text' href='http://feeds.feedburner.com/SmartDimmer' target='_blank' className={classes.socialButton}>Feet</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}