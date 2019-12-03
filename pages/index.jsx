// @flow

import React from 'react';

import Link from 'next/link';

import 'normalize.css';
import { wrapPage } from '../imports/project/wrap-page';
import { useGql } from '../imports/deepcase/hasura/use';

import {Page} from '../imports/index';


export default wrapPage(() => (<>
  <Page />
</>));
