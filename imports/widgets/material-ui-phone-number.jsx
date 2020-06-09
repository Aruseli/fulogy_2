// @flow

import React from 'react';
import _ from 'lodash';
import { BaseField } from 'uniforms';
import { AutoField } from 'uniforms-material';

let _MuiPhoneNumber;

if (_.get(process, 'browser')) _MuiPhoneNumber = require('material-ui-phone-number').default;
else _MuiPhoneNumber = undefined;

export const MuiPhoneNumber = _MuiPhoneNumber;

export const UniformPhone = (
  props: any,
  { uniforms }: any,
) => {
  return MuiPhoneNumber ? <MuiPhoneNumber
    {...props}
    disabled={typeof(props.disabled) === 'boolean' ? props.disabled : uniforms.state.disabled}
    fullWidth
    placeholder='Ваш телефон'
    onChange={value => uniforms.onChange(props.name, value)}
    error={props.error || !!_.find(_.get(uniforms, 'error.details'), (error) => error.params.missingProperty === props.name)}
  /> : <AutoField {...props}/>;
};

UniformPhone.contextTypes = BaseField.contextTypes;
