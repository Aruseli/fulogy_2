import Ajv from 'ajv';

import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const ajv = new Ajv({ allErrors: true, useDefaults: true });
const schema = {
  title: 'GuestData',
  type: 'object',
  properties: {
    name: { type: 'string', default: '', },
    phone: { type: 'string', minLength: 7 },
    acceptTermsOfUse: { type: 'boolean',  enum: [ true ], default: true  }
  },
  required: ['phone', 'acceptTermsOfUse']
};
function createValidator(schema) {
  const validator = ajv.compile(schema);
  return model => {
    validator(model);
    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}
const schemaValidator = createValidator(schema);
const bridge = new JSONSchemaBridge(schema, schemaValidator);
export default bridge;