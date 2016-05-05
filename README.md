# meteor-simple-schema-transform

Transform
[Meteor SimpleSchema](https://github.com/aldeed/meteor-simple-schema)
objects into other `objects`
and `functions` for use with a variety of form engines, validators, etc.

## buildValidateForReduxForm

A helper to turn a
[Meteor SimpleSchema](https://github.com/aldeed/meteor-simple-schema)
into a validate function for use with
[ReduxForm (et. al.)](http://redux-form.com/)

```js
// MyContainer
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { MyPage } from '../pages/MyPage';

import { buildValidateForReduxForm } from 'meteor-simple-schema-transform';

const mySchema = new SimpleSchema({
  name: {
    label: "Friendly Name",
    type: String,
    min: 3,
    max: 30,
  }
});

const validate = buildValidateForReduxForm(mySchema);

export default createContainer(({ params }) => {
  // ....
  return {
    validate
  }
}, MyPage);

## Roadmap

- [x] Proof of concept
- [ ] other easy schema validate variations
- [ ] other easy schema transformations

