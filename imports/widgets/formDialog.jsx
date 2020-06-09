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

import { MuiPhoneNumber, UniformPhone } from './material-ui-phone-number';

import Close from '@material-ui/icons/Close';

import { Context as AnaliticsContext } from '../project/analitics';

import {
  AutoField,
  AutoForm,
  ErrorField,
  SubmitField,
  BoolField
} from 'uniforms-material';

import GuestSchema from '../project/api/schema';

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
    backgroundColor: '#303c4f',
    '@media(max-width: 420px)': {
      margin: 16
    }
  },
  myInputLabel: {
    '&:focus': {
      borderColor: theme.palette.secondary.main 
    }
  }, 
  errorMessage: { 
    '& > *': {
      position: 'absolute',
      top: -8,
      right: 0,
      padding: 6,
      borderRadius: 5,
      boxShadow: '0 2px 10px 0 rgba(23, 23, 23, 0.1)',
      width: 'initial',
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
  },
  privacy: {
    '@media(max-width: 430px)': {
      fontSize: 12
    }
  },
  dialogContentStyle: {
    padding: 32, 
    boxSizing: 'border-box',
    '@media(max-width: 350px)': {
      padding: '24px 12px',
    }
  } 
}))

const tick = require('../../public/images/icon/tick-border.svg');
const tickChecked = require('../../public/images/icon/tick-checked-yellow.svg');

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

const AForma = ({title, button, thanks, trigger, onSubmit}) => {
  const classes = useStyle();
  
  return (
    <AutoForm 
      schema={GuestSchema} 
      onSubmit={async (data) => {
        onSubmit && onSubmit();
        await console.log('/api/lead',{ //axios.post
          name: data.name,
          phone: data.phone,
          page: document.location && (document.location.origin + document.location.pathname),
          pixelId: Cookies.get('__opix_uid'),
        })
      }}
    >
      <Typography variant='h2' component='h2' align='center' style={{color: '#fff'}}>{title}</Typography>
      <Typography variant='body1' component="p" align='center' gutterBottom style={{color: '#b4b4b4'}}>Введите свое имя и телефон</Typography>
      <AutoField variant='outlined' name="name" label={false} placeholder='Ваше имя' />
      <div style={{position: 'relative', marginTop: 24}}>
        <UniformPhone variant='outlined' name="phone" value="+7" type="text" />
        <ErrorField variant='outlined' name="phone">
          <span style={{color: '#f35454'}}>Поле должно быть заполненно</span>
        </ErrorField>
      </div>
      <div style={{marginTop: 24}}>
        <BoolField 
          name='acceptTermsOfUse'
          icon={<img src={tick} alt='checkbox' className={classes.tickIcon} />}
          checkedIcon={<img src={tickChecked} alt='checkbox' className={classes.tickIcon} />}
          label={<span className={classes.privacy} style={{color: '#b4b4b4'}}>Я принимаю условия <br /><a href='/privacy-policy' style={{color: '#f1c355'}} target='_blank'>политики конфиденциальности</a></span>}
        />
      </div>
      <ErrorField variant='outlined' name='acceptTermsOfUse' />
      <SubmitField fullWidth variant="contained" color="secondary" style={{color: '#fff', marginTop: 24}} size="large">
        {button}
      </SubmitField>
    </AutoForm>
  );
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
    await console.log('/api/lead',{ //axios.post
      name: nameValue,
      phone: phoneValue,
      page: document.location && (document.location.origin + document.location.pathname),
      pixelId: Cookies.get('__opix_uid'),
    })
  }}>{button}</Button>;

  return(
    <>
      <Dialog open={open} onClose={onClose} CloseClosearia-labelledby="form-dialog-title" maxWidth='md' classes={{paper: classes.paperDialog}}>
        <Hidden implementation='css' only={['md', 'lg', 'xl']}>
          <IconButton
            aria-labelclose            
            className={classes.closeButton}
            onClick={onClose}>
            <Close style={{height: 24, width: 24}} />
          </IconButton>
          { openThanks 
          ? <Thanks />
          : <>
            <DialogContent className={classes.dialogContentStyle}>
              <AForma 
                  title={title} 
                  button={button} 
                  onSubmit={() => {
                    setOpenThanks(!openThanks);
                    trigger('thanks');
                    onSubmit && onSubmit(); 
                  }}
                />
            </DialogContent>
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
            <DialogContent style={{padding: '64px 32px', boxSizing: 'border-box', zIndex: 22}}>
              <AForma 
                title={title} 
                button={button} 
                onSubmit={() => {
                  setOpenThanks(!openThanks);
                  trigger('thanks');
                  onSubmit && onSubmit(); 
                }}
              />
            </DialogContent>
          </>}
        </Hidden>
      </Dialog>
    </>
  )
}
