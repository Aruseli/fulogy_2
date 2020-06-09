import React from 'react';

import { makeStyles, Grid, Typography } from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

import {Circle} from './circle';
import {TextButton} from './small-elements';

const useStyle = makeStyles((theme) => ({
  mainBlock: {
    position: 'relative',
    borderRadius: 5,
    height: '100%',
    boxSizing: 'border-box',
    padding: '32px 16px',
    backgroundColor: theme.palette.primary.main,
    },
  avatar: {
    top: -17,
    left: 'calc(50% - 27px)'
  },
  social: {
    position: 'absolute',
    top: 16,
    left: 16
  },
  icon: {
    color: '#b4b4b4',
    width: 35,
    height: 35,
    paddingTop: 11,
    paddingLeft: 11
  },
  textColor: {
    color: theme.palette.primary.light
  },
}))

const user = require('../../images/max.jpg?resize&size=600');
const vk = require('../../public/images/icon/vk.svg');

export const items = [
  {
    Icon: PhotoCamera,
    src: vk,
    alt: 'отзывы о Fulogy в vk',
    title: 'Михаил Хусид',
    content: [`Хочу выразить глубокую признательность
      за уникальный товар, аналогов которому
      не смог найти нигде.
      Очень доволен безупречным качеством
      и функциональностью диммера. Хочется
      отдельно поблагодарить Евгения, за
      исключительно высокий уровень сервиса
      на всех этапах покупки: начиная от
      готовности помочь с пересылкой
      за границу (не предлагается на сайте),
      уровнем упаковки и готовности
      проконсультировать и помочь советом.
    `]
  },
  {
    srcAvatar: user,
    src: vk,
    alt: 'отзывы о Fulogy в vk',
    title: 'Максим Андреев',
    content: [`Отличная работа! На сайте можно точно
      рассчитать стоимость заказа копейка
      в копейку. Изготовили в день заказа.
      Далее отправили по почте России, очень
      переживал что приедет подсветка
      сломанная пополам. Однако, к качеству
      упаковки претензий вообще нет.
      Упаковано было в твердую картонную
      коробку.
      `]
  },
  {
    Icon: PhotoCamera,
    src: vk,
    alt: 'отзывы о Fulogy в vk',
    title: 'Olga Khudyakova',
    content: [`Очень довольна приобретением подсветки
      для кухни! Заказ был оформлен быстро, все
      детали были запрошены заранее и учтены.
      Светильник приехал почтой России в
      достаточно приемлемый срок. Особенно
      хочется отметить внимательный и тактичный
      подход к своему делу сотрудников
      организации на всех этапах покупки: от
      выбора светильника до его установки
      и настройки.
      `]
  }
]

export const Review = ({
  title,
  content, 
  srcAvatar=null, 
  Icon=null, 
  ...props}) => {
  const classes = useStyle();

  return (
    <div className={classes.mainBlock}>
      <Circle style={{top: -28, left: 'calc(50% - 27px)', backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(255,255,255,0.1)'}}>
        { srcAvatar 
          ? <img src={srcAvatar} alt='отзыв о Fulogy' style={{width: '100%'}} /> 
          : Icon 
          ? <Icon className={classes.icon} /> 
          : null }
      </Circle>
      <img {...props} className={classes.social} />
      <div classes={classes.textBlock}>
        <div style={{marginTop: 16}}>
          <Typography variant='body1' component='h2' align='center' gutterBottom style={{color: '#fff'}}>
            {title}
          </Typography>
          {content.map((content, i) => (
            <Typography key={i} variant='body1' component='p' paragraph className={classes.textColor}>
              {content}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  )
}