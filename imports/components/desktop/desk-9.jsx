import React from 'react';
import { useSpring, animated as a, interpolate } from 'react-spring';

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
    width: 20, 
    marginRight: 16
  }
}))

const phone = require('../../../public/images/icon/call-without-shadow.svg');
const mail = require('../../../public/images/icon/mail-without-shadow.svg');
const check = require('../../../public/images/icon/check.svg');
const letter = require('../../../images/fulogy.png?resize&size=600');

export const Footer = () => {
  const classes = useStyle(); 
  const [props, setSpring] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 350, friction: 40 } }));

  const itemTrans = (x, y) => `translate(${x-50}px,${y-50}px)`;

  return(<Grid 
        container 
        justify='flex-start' 
        alignItems='stretch' 
        style={{backgroundColor: '#202835', padding: '64px 0', position: 'relative'}}
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
        <img src={letter} style={{width: '63%', position: 'absolute', top: 48, right: 0}} />
      <Grid item md={1} />
      <Grid item style={{marginRight: 32}}>
        <Logo width='150px'/>
      </Grid>
      <Grid item style={{marginRight: 32}}>
        <List>
          <ListItem style={{paddingTop: 0, paddingBottom: 0}} >
            <ListItemIcon>
              <img src={phone} alt='позвонить в Fulogy' className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
               <Button variant="text"
                href='tel: 8(800) 505 65 33'>
                8 800 505-65-33
              </Button>
            } />
          </ListItem>
          <ListItem style={{paddingTop: 0, paddingBottom: 0}}>
            <ListItemIcon>
              <img src={mail} alt='написать Fulogy' className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
               <Button variant="text" style={{textTransform: 'none', paddingBottom: 0}}
                href='mailto: info@fulogy.com'>
                info@fulogy.com
              </Button>
            } />
          </ListItem>
        </List>
      </Grid>
      <Grid item>
        <List>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <img src={check} alt='адрес Fulogy' style={{width: 20, position: 'absolute', top: 10, left: 6}} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px'}}>
                141544, МО,<br />Пятницкое шоссе, 2, Юрлово<br />г. Калининград, ул. Пограничная, 766
              </Typography>
            } />
          </ListItem>
        </List>
      </Grid>
      <Grid container justify='flex-start' alignItems='center' style={{marginTop: 32}}>
        <Grid item md={3} />
        <Grid item style={{marginRight: 32}}>
          <Button variant='text' href='https://plus.google.com/118436112847149375359' target='_blank' className={classes.socialButton}>Google+</Button>
        </Grid>
        <Grid item style={{marginRight: 32}}>
          <Button variant='text' href='https://www.facebook.com/fulogy/' target='_blank' className={classes.socialButton}>Facebook</Button>
        </Grid>
        <Grid item style={{marginRight: 32}}>
          <Button variant='text' href='https://www.instagram.com/fulogy.ru/' target='_blank' className={classes.socialButton}>Instagram</Button>
        </Grid>
        <Grid item style={{marginRight: 32}}>
          <Button variant='text' href='https://vk.com/public124817525' target='_blank' className={classes.socialButton}>Vk</Button>
        </Grid>
        <Grid item style={{marginRight: 32}}>
          <Button variant='text' href='https://www.youtube.com/channel/UC3VvssJI1Lw1Uf--3P6I2Nw' target='_blank' className={classes.socialButton}>Youtube</Button>
        </Grid>
        <Grid item>
          <Button variant='text' href='http://feeds.feedburner.com/SmartDimmer' target='_blank' className={classes.socialButton}>Feet</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}