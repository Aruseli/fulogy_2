import React from 'react';

import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import {BlockYellowLine} from '../../widgets/block-with-yellow-line';
import { ContainedButton } from '../../widgets/small-elements';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 64
  },
  typographyBody1: {
    color: theme.palette.primary.light
  },
  cornerImage: {
    width: '55%',
    position: 'absolute',
    top: 0,
    right: 0,
  }
}))

export const MobileTwo = () => {
  const classes = useStyle();

  return (<div className={classes.root}>
    <Grid 
      container
      justify='center'
      alignItems='stretch'
      spacing={4}
    >
      <Grid item md={12}>
        <Typography variant='h1' component='h1' align='center'>
          Это магия?<br />Нет, это Fulogy
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <BlockYellowLine style={{height: '100%'}}>
          <>
            <Typography variant='h2' component='h2' gutterBottom align='center'>
              Управляйте светом<br />взмахом руки
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Признайтесь: Вы об этом мечтали. Небрежный жест – и 
              ровный свет заливает рабочую поверхность кухни. 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Именно 
              так работает бесконтактный кухонный светильник Fulogy. 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Забудьте о грязных пятнах на лампе и поисках выключателя 
              на ощупь в темноте. 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Вжух! И можно готовить.
            </Typography>
          </>
        </BlockYellowLine>
      </Grid>
      <Grid item xs={11}>
        <BlockYellowLine style={{height: '100%'}}>
          <>
            <Typography variant='h2' component='h2' gutterBottom align='center'>
              Только свет,<br />ничего лишнего
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Минималистичный дизайн светильников идеально сочетается
              с любым форм-фактором и дизайном Вашей кухни. 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              При этом 
              светильники монтируются слитно, как единая конструкция, 
              даже на габаритных кухнях сложной конфигурации. 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Результат? <br />
              Органичный и стильный внешний вид, неизменно впечатляющий 
              не только гостей, но и Вас самих.
            </Typography>
          </>
        </BlockYellowLine>
      </Grid>
      <Grid item xs={11}>
        <BlockYellowLine style={{height: '100%'}}>
          <>
            <Typography variant='h2' component='h2' gutterBottom align='center'>
              Лучше светит<br />только Солнце
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Мы перебрали десяток поставщиков, прежде чем остановились 
              на светодиодах Epistar. 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Коэффициент цветопередачи CRI>98 – 
              это естественные и сочные цвета продуктов, удовольствие от 
              готовки и великолепные блюда! 
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Кроме того, светодиодные светильники 
              Fulogy светят равномерно, не раздражая глаза микропульсациями.
            </Typography>
          </>
        </BlockYellowLine>
      </Grid>
      <Grid item style={{padding: '48px 0'}}>
        <ContainedButton />
      </Grid>
    </Grid>
  </div>)
}