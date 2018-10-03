console.log('app.js hello world');

// var template = <p>This is JSX from app.js</p>;

const template = React.createElement(
    'h1',
    { id: 'app' },
    'Something New'
);
const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);