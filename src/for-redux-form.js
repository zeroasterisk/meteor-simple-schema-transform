// A helper to turn a Meteor SimpleSchema
//     https://github.com/aldeed/meteor-simple-schema
// into a validate function for use with ReduxForm (et. al.)
//     http://redux-form.com/

import _ from 'lodash';

/**
 * this is a validation function based on SimpleSchema,
 * passed into redux-form as `validate`
 * @param object mySchemaObject eg: new SimpleSchema({...})
 * @return object errors eg: {} = valid, or {field: "reason"} = invalid
 */
export const buildValidate = (mySchemaObject, contextName) => {
  return values => {
    const context = mySchemaObject.namedContext(
      contextName ? contextName : 'myContext'
    );
    if (context.validate(values)) {
      // isValid
      return {};
    }
    return _.fromPairs(_.map(
      context.invalidKeys(),
      o => [ o.name, context.keyErrorMessage(o.name) ]
    ));
  };
};


