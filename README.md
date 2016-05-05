# meteor-simple-schema-transform

Transform
[Meteor SimpleSchema](https://github.com/aldeed/meteor-simple-schema)
objects into other `objects`
and `functions` for use with a variety of form engines, validators, etc.

## buildValidateForReduxForm

A helper to turn a
[Meteor SimpleSchema](https://github.com/aldeed/meteor-simple-schema)
into a validate function for use with
[ReduxForm](http://redux-form.com/)

```js
// MyContainer
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { MyPage } from '../pages/MyPage';

import SST from 'meteor-simple-schema-transform';

const mySchema = new SimpleSchema({
  name: {
    label: "Friendly Name",
    type: String,
    min: 3,
    max: 30,
  }
});

const validate = SST.forReduxForm.buildValidate(mySchema);

export default createContainer(({ params }) => {
  // ....
  saveData (data) {
    Meteor.call('myMethod', data, (err) => {
      if (err) console.error('Got Error on saveData', err);
    });
  }
  return {
    saveData,
    validate
  }
}, MyPage);

## Roadmap

- [x] Proof of concept
- [ ] other easy schema validate variations
- [ ] other easy schema transformations

