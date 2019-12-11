import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core';

import {
  ContainedButton
} from '../../widgets/small-elements';
import {OpenedBlock} from '../../widgets/opened-block';
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
}))

export const bgLine = require('../../../images/mob-kit-back.jpg?resize&size=600');
const kitchen = require('../../../images/kitchen2.jpg?resize&size=600');

export const MobileFour = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  
  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest4');
  }

  return (<div style={{overflow: 'hidden', marginTop: 64}}>
    <div className={classes.line}>
      <Grid 
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={8}
        style={{
          padding: '56px 0px 32px 0'
        }}
      >
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>30 мин</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>замер</Typography>
          </div>
        </Grid>
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>48-72 часа</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>изготовление</Typography>
          </div>
        </Grid> 
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>15 мин</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>установка</Typography>
          </div>
        </Grid>
        <Grid item xs={11}>
          <div>
            <Typography variant='h1' component='h3' align='center' className={classes.shadowedFont}>5 лет</Typography>
          </div>
          <div>
            <Typography variant='body1' component='p' align='center' className={classes.subtitleFonts}>гарантия</Typography>
          </div>
        </Grid>
      </Grid>     
    </div>
    <div style={{marginTop: 64}}>
      <Typography variant='h1' component='h1' align='center'>
        5 причин<br />заказать кухонный<br />светильник Fulogy
      </Typography>
    </div>
    <Container>
      <OpenedBlock style={{marginTop: 48, backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',}} title={<>1. Для удобной и безопасной<br />готовки</>}>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom>
            1. Для удобной и безопасной<br />готовки
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Светодиодные светильники Fulogy светят ярче и лучше, чем большинство 
            типовых кухонных ламп за счет высокой плотности светодиодов. 
            При этом корпус из анодированного алюминия прекрасно отводит тепло, 
            <span style={{color: '#000'}}>не позволяя светодиодам перегреться</span>.
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            <span style={{color: '#000'}}>Итог:</span> рабочий стол отлично освещен. 
            Отсутствие мерцаний и великолепная цветопередача позволяют готовить безопасно и с удовольствием.
          </Typography>
          <Typography variant='body1' component='p'>
            И никаких больше отпечатков пальцев<br />на лампе!
          </Typography>
        </>
      </OpenedBlock>
      <OpenedBlock style={{marginTop: 48, backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',}} title='2. Для идеального интерьера'>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom>
            2. Для идеального интерьера
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Вы знаете, как это бывает обычно. Разрозненные лампы, торчащие провода, 
            плохо освещенные участки там, где лампы не поместились. Напротив, 
            светильники Fulogy органично вписываются в любую кухню и выглядят просто отпадно!
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Форма светильника создает <span style={{color: '#000'}}>эффект плавного перетекания</span> навесных шкафов в «фартук» кухни. 
          </Typography>
          <Typography variant='body1' component='p'>
            А непрерывная полоса мягкого света вдоль всего гарнитура обеспечивает равномерную 
            подсветку каждого сантиметра рабочей поверхности и неизменный wow-эффект.
          </Typography>
        </>
      </OpenedBlock>
      <OpenedBlock style={{marginTop: 48, backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',}} title={<>3. Для повседневного<br />удобства</>}>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom>
            3. Для повседневного удобства
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Все светодиодные светильники Fulogy включаются синхронно, одним взмахом руки. 
            И выключаются тоже.
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Нет нужды управлять каждой лампой по отдельности, как это происходит 
            с китайскими светильниками из строительных гипермаркетов.
          </Typography>
          <Typography variant='body1' component='p' >
            <span style={{color: '#000'}}>Более того:</span> Вы можете задать <span style={{color: '#000'}}>интенсивность освещения</span> 
            или использовать функцию «провожающий свет», чтобы с комфортом покинуть кухню вечером.
          </Typography>
        </>
      </OpenedBlock>
      <OpenedBlock style={{marginTop: 48, backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',}} title='4. Для готовой кухни'>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom>
            4. Для готовой кухни
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Светильники устанавливаются в уже <span style={{coclor: '#000'}}>готовый кухонный гарнитур.</span> Это значит, 
            что заказать Fulogy можно в любое время: в новую кухню сразу после ремонта 
            или в уже давно привычную, но недостаточно светлую.
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            <span style={{color: '#000'}}>Срок изготовления –</span> 1-3 дня с момента подтверждения заказа, планировать заранее 
            ничего не нужно. 
          </Typography>
          <Typography variant='body1' component='p' >
            <span style={{color: '#000'}}>Размер</span> светодиодных светильников до миллиметра соответствует размерам 
            Вашей кухни, какой бы сложной она ни была.
          </Typography>
        </>
      </OpenedBlock>
      <OpenedBlock style={{marginTop: 48, backgroundColor: '#fff', boxShadow: '0 15px 30px 0 rgba(0,0,0,0.1)',}} title='5. Для легкой установки'>
        <>
          <Typography variant='h3' component='h2' align='center' gutterBottom>
            5. Для легкой установки
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Запоминайте, что Вам понадобится для установки кухонных светильников Fulogy: <span style={{color: '#000'}}>ничего.</span> 
            Уже через три дня мы привезем светильники и сами их установим. Без швов, без свисающей «лапши» 
            проводов, без нарушения внешнего вида кухни. И даже без пыли!
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Типичный процесс установки занимает <span style={{color: '#000'}}>7-10 минут.</span> Светильники подключаются к питанию вытяжки, 
            а провода питания полностью скрыты.
          </Typography>
        </>
      </OpenedBlock>
    </Container>
    <div style={{marginTop: 64, textAlign: 'center', position: 'relative'}}>
      <img src={kitchen} alt='освещение рабочей зоны кухни от Fulogy' style={{marginTop: 32, width: '100%'}} />
      <ContainedButton style={{position: 'relative', bottom: 23}} onClick={onClickLight} />
    </div>
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