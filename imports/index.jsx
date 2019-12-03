import React from 'react';

import { Hidden } from '@material-ui/core';

import {DesktopOne} from '../imports/components/desktop/desk-1';
import {DesktopTwo} from '../imports/components/desktop/desk-2';
import {DesktopThree} from '../imports/components/desktop/desk-3';

import {MobileOne} from '../imports/components/mobile/mobile-1';
import {MobileTwo} from '../imports/components/mobile/mobile-2';
import {MobileThree} from '../imports/components/mobile/mobile-3';

export const Page = () => {
  return (<>
    <Hidden implementation='css' only={['sm', 'xs']}>
      <DesktopOne /> 
      <DesktopTwo />
      <DesktopThree />  
    </Hidden>
    
    <Hidden implementation='css' only={['md', 'lg', 'xl']}>
      <MobileOne />  
      <MobileTwo />
      <MobileThree />
    </Hidden>
  </>
  )
}