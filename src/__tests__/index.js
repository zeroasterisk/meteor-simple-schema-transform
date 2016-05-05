import {expect} from 'chai';
import SST from '../';
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

describe('SimpleSchemaTransform (SST)', () => {
  it('should be an object', () => {
    expect(SST).to.be.an('object');
  });
  describe('forReduxForm', () => {
    it('should be an object', () => {
      expect(SST.forReduxForm).to.be.an('object');
    });
    describe('buildValidate', () => {
      it('should be return a function', () => {
        expect(SST.forReduxForm.buildValidate).to.be.a('function');
      });
      it('should add return a function', async () => {
        const validate = await SST.forReduxForm.buildValidate(mockSimpleSchema);
        expect(validate).to.be.a('function');
      });
      it('validate should return an errors object', async () => {
        const validate = await SST.forReduxForm.buildValidate(mockSimpleSchema);
        const result = validate({name: 'x'});
        expect(result).to.be.an('object');
        expect(result.name).to.equal('Some problem with name');
      });
    });
  });
});
