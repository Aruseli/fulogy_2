import React, {useContext, useState, useEffect} from 'react';

import {
  makeStyles,  
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Button,
  Hidden
} from '@material-ui/core';

import Close from '@material-ui/icons/Close';

import { Context as AnaliticsContext } from '../project/analitics';

import axios from 'axios';
import Cookies from 'js-cookie';

const useStyle = makeStyles(theme => ({
  dialogStyles: {
    width: '100%',
    maxWidth: 350
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: theme.palette.grey[500],
    [theme.breakpoints.up('md')]: {
      right: theme.spacing(0.5),
      top: theme.spacing(0.5),
    }
  },
  paperDialog: {
    borderRadius: 10,
    backgroundColor: '#303c4f'
  },
  myInputLabel: {
    '&:focus': {
      borderColor: theme.palette.secondary.main 
    }
  } 
}))

const Thanks = () => {

  return(
    <>
      <DialogContent style={{padding: 32, boxSizing: 'border-box', backgroundColor: '#303c4f'}}>
        <Typography variant='h5' component="h1" align='center' gutterBottom color='secondary'>спасибо за заявку</Typography>
        <Typography variant='body1' component="p" align='center' style={{color: '#fff'}}>В ближайшее время мы с Вами свяжемся</Typography>
      </DialogContent>
    </>
  )
}

export const FormDialog = ({open, onClose, title, button, onSubmit}) => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const[openThanks, setOpenThanks] = useState(false);
  const[nameValue, setNameValue] = useState('');
  const[phoneValue, setPhoneValue] = useState('');

  useEffect(() => {
    if (open) {
      setOpenThanks(false);
      setNameValue('');
      setPhoneValue('');
    }
  }, [open]);

  const buttonElement = <Button fullWidth variant="contained" color="secondary" style={{color: '#202835'}} size="large" 
  onClick={async () => {
    setOpenThanks(!openThanks);
    trigger('thanks');
    onSubmit && onSubmit()
    await console.log({
      name: nameValue,
      phone: phoneValue,
      page: document.location && (document.location.origin + document.location.pathname),
      pixelId: Cookies.get('__opix_uid'),
    })
  }}>{button}</Button>;

  return(
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" maxWidth='md' classes={{paper: classes.paperDialog}}>
        <Hidden implementation='css' only={['md', 'lg', 'xl']}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}>
            <Close style={{height: 24, width: 24}} />
          </IconButton>
          { openThanks 
          ? <Thanks />
          : <>
            <DialogContent style={{padding: 32, boxSizing: 'border-box'}}>
              <Typography variant='h2' component='h2' align='center' style={{color: '#fff'}}>{title}</Typography>
              <Typography variant='body1' component="p" align='center' gutterBottom style={{color: '#b4b4b4'}}>Введите свое имя и телефон</Typography>
              <div style={{paddingTop: 16}}>
                <TextField
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                  className={classes.myInputLabel}
                  placeholder="Имя"
                  autoFocus
                  id="name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  onChange={(e) => setPhoneValue(e.target.value)}
                  value={phoneValue}
                  placeholder="Телефон"
                  required
                  id="phone"
                  type="phone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  inputProps={{pattern: "[+]?(\\d[-\\(\\)\\s]*){11}"}}
                />
              </div>
            </DialogContent>
            <DialogActions style={{padding: 24}}>
              {buttonElement}
            </DialogActions>
          </>}
        </Hidden>
        <Hidden implementation='css' only={['sm', 'xs']}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}>
            <Close style={{height: 36, width: 36}} />
          </IconButton>
          { openThanks 
          ? <Thanks />
          : <>
            <DialogContent style={{padding: '64px 32px', boxSizing: 'border-box'}}>
              <Typography variant='h2' component='h2' align='center' style={{color: '#fff'}}>{title}</Typography>
              <Typography variant='body1' component="p" align='center' gutterBottom style={{color: '#b4b4b4'}}>Введите свое имя и телефон</Typography>
              <div style={{paddingTop: 48}}>
                <TextField
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                  className={classes.myInputLabel}
                  placeholder="Имя"
                  autoFocus
                  id="name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  onChange={(e) => setPhoneValue(e.target.value)}
                  value={phoneValue}
                  placeholder="Телефон"
                  required
                  id="phone"
                  type="phone"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  inputProps={{pattern: "[+]?(\\d[-\\(\\)\\s]*){11}"}}
                />
              </div>
            </DialogContent>
            <DialogActions style={{paddingBottom: 48, paddingLeft: 32, paddingRight: 32}}>
              {buttonElement}
            </DialogActions>
          </>}
        </Hidden>
      </Dialog>
    </>
  )
}
