import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import {BlockYellowLine} from '../../widgets/block-with-yellow-line';
import {ContainedButton} from '../../widgets/small-elements';
import {FormDialog} from '../../widgets/formDialog';

import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '64px 32px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${vawe})`,
    backgroundPosition: 'bottom',
    backgroundSize: '100%'
  },
  typographyBody1: {
    color: theme.palette.primary.light
  },
  cornerImage: {
    width: '55%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  imageUp: {
    position: 'absolute',
    top: -32,
    right: -24,
    width: 300,
  },
  imageDown: {
    position: 'absolute',
    top: 24,
    right: -40,
    width: 250,
    transform: 'rotate(-10deg)'
  }
}))

const vawe = require('../../../public/images/icon/vawe-first.svg');
const hand = require('../../../images/1-1.png?resize&size=600');
const lamp = require('../../../images/2-1.png?resize&size=600');

export const DesktopTwo = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);

  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest2');
  }

  return (<div className={classes.root}>
    <img src={lamp} alt='fulogy' className={classes.imageUp} />
    <img src={hand} alt='fulogy' className={classes.imageDown} />
    <Grid 
      container
      justify='center'
      alignItems='stretch'
      spacing={4}
    >
      <Grid item md={12}>
        <Typography variant='h2' component='h1' align='center'>
          Это магия? Нет, это Fulogy
        </Typography>
      </Grid>
      <Grid item md={4}>
        <BlockYellowLine style={{height: '100%', backgroundColor: '#fff'}}>
          <>
            <Typography variant='h3' component='h2' gutterBottom>
              Управляйте светом взмахом руки
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
      <Grid item md={4}>
        <BlockYellowLine style={{height: '100%', backgroundColor: '#fff'}}>
          <>
            <Typography variant='h3' component='h2' gutterBottom>
              Только свет, ничего лишнего
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
      <Grid item md={4}>
        <BlockYellowLine style={{height: '100%', backgroundColor: '#fff'}}>
          <>
            <Typography variant='h3' component='h2' gutterBottom>
              Лучше светит только Солнце
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
      <Grid item>
        <ContainedButton onClick={onClickLight} />
      </Grid>
    </Grid>
    <FormDialog
      open={dialogOpenLight}
      onClose={() => setDialogOpenLight(!dialogOpenLight)}
      title='Чтобы заказать светильники'
      button='Заказать светильники'
      onSubmit={() => trigger('lightThanks2')}
    />
  </div>)
}