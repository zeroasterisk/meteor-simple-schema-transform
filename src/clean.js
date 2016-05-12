/**
 * this is a value-cleaup function based on SimpleSchema,
 * https://github.com/aldeed/meteor-simple-schema#cleaning-data
 *
 * @param object mySchemaObject eg: new SimpleSchema({...})
 * @return function clean(values) => values
 */
export const buildClean = (mySchemaObject) => {
  return values => mySchemaObject.clean(values)
};



