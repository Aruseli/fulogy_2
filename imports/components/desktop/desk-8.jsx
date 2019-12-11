import React, {useState, useContext} from 'react';

import {ContainedButton} from '../../widgets/small-elements';
import {Slider} from '../../widgets/slider';
import {FormDialog} from '../../widgets/formDialog';

import { Context as AnaliticsContext } from '../../project/analitics';

const vawe = require('../../../public/images/icon/vawe-but.svg');

export const DesktopEight = () => {
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenLight, setDialogOpenLight] = useState(false);
  
  const onClickLight = () => {
    setDialogOpenLight(!dialogOpenLight);
    trigger('lightRequest6');
  }

  return(
    <div style={{position: 'relative'}}>
      <Slider />
      <div style={{marginTop: 64, paddingBottom: 115, textAlign: 'center'}}>
        <ContainedButton onClick={onClickLight} style={{zIndex: 111}} />
      </div>
      <div style={{position: 'absolute', bottom: 0, left: 0}}>
        <img src={vawe} style={{width: '100%'}} />
      </div>
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