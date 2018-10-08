'use strict';

console.log('app.js hello world');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some text'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Stephanie Smith'
  ),
  React.createElement(
    'p',
    null,
    'Age: 28'
  ),
  React.createElement(
    'p',
    null,
    'Location: Portland'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
