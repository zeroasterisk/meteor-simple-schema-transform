# meteor-simple-schema-transform

Transform
[Meteor SimpleSchema](https://github.com/aldeed/meteor-simple-schema)
objects into other `objects`
and `functions` for use with a variety of form engines, validators, etc.

# SST (SimpleSchemaTransform)

A helper to turn a
[Meteor SimpleSchema](https://github.com/aldeed/meteor-simple-schema)
into a variety of translations and transformations,
for use with any other form builder, validator, submitter, etc.

The goal is to make SimpleSchema a portable source, for other libraries.

## Status

This is a very early idea project.
Take a look at this
[forum thread](https://forums.meteor.com/t/simple-schema-redux-form-or-yup-or-formsy-or-formal-for-react/21777)

Also checkout the excellent [uniforms](https://github.com/vazco/uniforms/) project
for a more complete solution for forms (though more tied to Meteor).

## Install

```shell
npm i --save meteor-simple-schema-transform
```

## Usage

There are various parts you may want to use.
Include only those tools you need.

Missing a tool/translation? _(add it and submit a PR)_

### SST.buildClean

Build SimpleSchema into a value cleanup function - clean values object based on schema

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

const cleaner = SST.buildClean(mySchema);

export default createContainer(({ params }) => {
  // ....
  saveData (data) {
    Meteor.call('myMethod', cleaner(data), (err) => {
      if (err) console.error('Got Error on saveData', err);
    });
  }
  return {
    saveData
  }
}, MyPage);
```

### SST.forReduxForm.buildValidate

Build SimpleSchema into a validate function for use with
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

const cleaner = SST.buildClean(mySchema);
const validate = SST.forReduxForm.buildValidate(mySchema);

export default createContainer(({ params }) => {
  // ....
  saveData (data) {
    Meteor.call('myMethod', cleaner(data), (err) => {
      if (err) console.error('Got Error on saveData', err);
    });
  }
  return {
    saveData,
    validate
  }
}, MyPage);
```

## Roadmap

- [x] Proof of concept
- [ ] other easy schema validate variations
- [ ] other easy schema transformations

