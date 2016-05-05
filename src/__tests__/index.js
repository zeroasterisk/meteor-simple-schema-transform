import {expect} from 'chai';
import {buildValidateForReduxForm} from '../';
const {describe, it} = global;

const mockSimpleSchemaObj = {
  name: {
    label: 'Friendly Name',
    type: String,
    min: 3,
    max: 30,
  }
};
const mockSimpleSchema = {
  schema: () => {
    return mockSimpleSchemaObj;
  },
  namedContext: () => {
    return {
      validate: () => {
        return false;
      },
      invalidKeys: () => {
        return [ { name: 'name' } ];
      },
      keyErrorMessage: name => {
        return `Some problem with ${name}`;
      }
    };
  }
};

describe('buildValidateForReduxForm', () => {
  it('should be return a function', async () => {
    expect(buildValidateForReduxForm).to.be.a('function');
  });
  it('should add return a function', async () => {
    const validate = await buildValidateForReduxForm(mockSimpleSchema);
    expect(validate).to.be.a('function');
  });
  it('validate should return an errors object', async () => {
    const validate = await buildValidateForReduxForm(mockSimpleSchema);
    const result = validate({name: 'x'});
    expect(result).to.be.an('object');
    expect(result.name).to.equal('Some problem with name');
  });
});
