import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

import {
  ContainedButton
} from '../../widgets/small-elements';
import { HorizontalBlock } from '../../widgets/horizontal-block';
import {FormDialog} from '../../widgets/formDialog';

import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  line: {
    position: 'relative',
    backgroundImage: `url(${bgLine})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  shadowedFont: {
    color: theme.palette.secondary.main,
    textShadow: '0 1px 26px rgba(241, 195, 85, 0.7)',
  },
  subtitleFonts: {
    color: '#fff',
    paddingTop: 8
  },
  textColor: {
    color: theme.palette.primary.light
  }
}))

export const bgLine = require('../../../images/Photo-4.jpg?resize&size=600');
// export const desktopWoman = require('../../../images/desktop-kit.png?resize&size=600');
const vawe = require('../../../public/images/icon/vawe-but.svg');

export const DesktopFour = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  
  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest4');
  }

  return (<div style={{overflow: 'hidden'}}>
    <div className={classes.line}>
      <Grid 
        container
        justify='center'
        alignItems='stretch'
        style={{
          padding: '32px 0'
        }}
      >
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>30 мин</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>замер</Typography>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>48-72 часа</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>изготовление</Typography>
          </div>
        </Grid> 
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>15 мин</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>установка</Typography>
          </div>
        </Grid>
        <Grid item md={3}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>5 лет</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>гарантия</Typography>
          </div>
        </Grid>
      </Grid>     
    </div>
    <Grid
      container
      justify='center'
      alignItems='center'
      style={{
        marginTop: 64,
        position: 'relative',
      }}
      >
      <Grid item md={12}>
        <Typography variant='h2' component='h1' gutterBottom align='center'>
          5 причин заказать кухонный светильник Fulogy
        </Typography>  
      </Grid>
      <Grid item md={12} style={{paddingTop: 48}}>
        <Grid 
          container
          justify='center'
          alignItems='center'
        >
          <Grid item md={10}>
            <HorizontalBlock>
              <>
                <Typography variant='h3' component='h2' gutterBottom>
                  1. Для удобной и безопасной готовки
                </Typography>
                <Typography variant='body1' component='p' paragraph>
                  Светодиодные светильники Fulogy светят ярче и лучше, чем большинство типовых кухонных 
                  ламп за счет высокой плотности светодиодов. При этом корпус из анодированного 
                  алюминия прекрасно отводит тепло, не позволяя светодиодам перегреться.
                </Typography>
                <Typography variant='body1' component='p'>
                  Итог: рабочий стол отлично освещен. Отсутствие мерцаний и великолепная цветопередача 
                  позволяют готовить безопасно и с удовольствием.
                </Typography>
              </>
            </HorizontalBlock>
          </Grid>
          <Grid item md={10}>
            <HorizontalBlock>
              <>
                <Typography variant='h3' component='h2' gutterBottom>
                  2. Для идеального интерьера
                </Typography>
                <Typography variant='body1' component='p' paragraph>
                  Вы знаете, как это бывает обычно. Разрозненные лампы, торчащие провода, плохо освещенные 
                  участки там, где лампы не поместились. Напротив, светильники Fulogy органично вписываются 
                  в любую кухню и выглядят просто отпадно! Форма светильника создает эффект плавного перетекания 
                  навесных шкафов в «фартук» кухни.
                </Typography>
                <Typography variant='body1' component='p'>
                  А непрерывная полоса мягкого света вдоль всего гарнитура обеспечивает равномерную подсветку 
                  каждого сантиметра рабочей поверхности и неизменный wow-эффект.
                </Typography>
              </>
            </HorizontalBlock>
          </Grid>
          <Grid item md={10}>
            <HorizontalBlock>
              <>
                <Typography variant='h3' component='h2' gutterBottom>
                  3. Для повседневного удобства
                </Typography>
                <Typography variant='body1' component='p' paragraph>
                  Все светодиодные светильники Fulogy включаются синхронно, одним взмахом руки. 
                  И выключаются тоже. Нет нужды управлять каждой лампой по отдельности, как это 
                  происходит с китайскими светильниками из строительных гипермаркетов.
                </Typography>
                <Typography variant='body1' component='p'>
                  Более того: Вы можете задать интенсивность освещения или использовать 
                  функцию «провожающий свет», чтобы с комфортом покинуть кухню вечером.
                </Typography>
              </>
            </HorizontalBlock>
          </Grid>
          <Grid item md={10}>
            <HorizontalBlock>
              <>
                <Typography variant='h3' component='h2' gutterBottom>
                  4. Для готовой кухни
                </Typography>
                <Typography variant='body1' component='p' paragraph>
                  Светильники устанавливаются в уже готовый кухонный гарнитур. Это значит, что заказать 
                  Fulogy можно в любое время: в новую кухню сразу после ремонта или в уже давно 
                  привычную, но недостаточно светлую. Срок изготовления – 1-3 дня с момента подтверждения 
                  заказа, планировать заранее ничего не нужно.
                </Typography>
                <Typography variant='body1' component='p'>
                  Размер светодиодных светильников до миллиметра соответствует размерам Вашей кухни, 
                  какой бы сложной она ни была.
                </Typography>
              </>
            </HorizontalBlock>
          </Grid>
          <Grid item md={10}>
            <HorizontalBlock>
              <>
                <Typography variant='h3' component='h2' gutterBottom>
                  5. Для легкой установки
                </Typography>
                <Typography variant='body1' component='p' paragraph>
                  Запоминайте, что Вам понадобится для установки кухонных светильников Fulogy: ничего. Уже через 
                  три дня мы привезем светильники и сами их установим. Без швов, без свисающей «лапши» проводов, 
                  без нарушения внешнего вида кухни. И даже без пыли!
                </Typography>
                <Typography variant='body1' component='p'>
                  Типичный процесс установки занимает 7-10 минут. Светильники подключаются к питанию вытяжки, 
                  а провода питания полностью скрыты.
                </Typography>
              </>
            </HorizontalBlock>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{marginTop: 64, marginBottom: 105, zIndex: 111}}>
        <ContainedButton onClick={onClickLight} />
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
      onSubmit={() => trigger('lightThanks4')}
    />
  </div>
  )
}